/**
 * Http小爬虫2
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 14:47:35
 * @version $Id$
 */

var http = require('http');
var cheerio = require('cheerio');//如果没有则输入命令npm install cheerio来安装
								 //是特别为服务器定制的jQuery核心实现
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html) {//过滤提取章节这部分数据
	var $ = cheerio.load(html);
	var chapters = $('.chapter');
	// [{获取的数据结构
	// 	chapterTitle:'',
	// 	videos:[
	// 		title:'',
	// 		id:''
	// 	]
	// }]

	var courseData =[]

	chapters.each(function (item) {
		 // body...  
		 var chapter =$(this);
		 var chapterTitle = chapter.find('strong').text();//章节大标题
		 var videos = chapter.find('.video').children('li');
		 var chapterData = {
		 	chapterTitle:chapterTitle,
		 	videos:[]
		 }

		 videos.each(function(item) {//获取每个章节下的小节
		 	var video = $(this).find('.studyvideo');
		 	var videoTitle  = video.text();//章节小标题
		 	var id = video.attr('href').split('video/')[1];

		 	chapterData.videos.push({
		 		title:videoTitle,
		 		id:id
		 	})
		 });
		 courseData.push(chapterData);
	})
	return courseData;
}

function printCourseInfo (courseData) {//打印获取的数据
	 // body...  
	 courseData.forEach( function(item) {
	 	// statements
	 	var chapterTitle = item.chapterTitle;
	 	console.log(chapterTitle+"\n");

		item.videos.forEach( function(video) {
			// statements
			console.log("    【"+video.id+"】 "+video.title+"\n");
		});

	 });
}

http.get(url,function (res) {
	 var html='';
	 res.on('data',function (data) {
	 	 html+=data;
	 })
	 res.on('end',function () {
	 	//信息过滤
	 	var courseData = filterChapters(html);
	 	printCourseInfo(courseData);
	 })
}).on('error',function () {
	 console.log('获取课程数据出错')
})