/**
 * Http小爬虫，展示的promise异步操作的特性，发动4个http请求，汇总这4个请求的数据再做输出动作
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 14:47:35
 * @version $Id$
 */

var http = require('http');
var Promise = require("bluebird");
var cheerio = require('cheerio');//如果没有则输入命令npm install cheerio来安装
								 //是特别为服务器定制的jQuery核心实现
var url = 'http://www.imooc.com/learn/348';
var baseUrl = 'http://www.imooc.com/learn/';

var videoIds=[348,259,197,134,75];

function filterChapters(html) {//过滤提取章节这部分数据
	var $ = cheerio.load(html);

	var chapters = $('.chapter');
	var title = $('#main .hd h2').text();

	var number = parseInt($($("#main .statics .static-item")[2]).find('strong').text().trim(),10);
	// [{获取的数据结构
	// 	chapterTitle:'',
	// 	videos:[
	// 		title:'',
	// 		id:''
	// 	]
	// }]

	//升级版 数据结构由上面变成下面（因为打印多个页面的数据）

	//courseData = {获取的数据结构
	// 	title:title,
	// 	number:number,
	// 	videos:[{
		// 	chapterTitle:'',
		//	videos:[
		// 		title:'',
		// 		id:''
		// 	}]
	// }

	var courseData ={
		title:title,
		number:number,
		videos:[],
	}

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
		 courseData.videos.push(chapterData);
	})
	return courseData;
}

function printCourseInfo (coursesData) {//打印获取的数据
	 // body...  
	coursesData.forEach( function(courseData, index) {
		// statements
		console.log(courseData.number +'学习过'+courseData.title+"\n");

	});
	// console.log(coursesData);
	coursesData.forEach( function(courseData, index) {

		// statements
		console.log('###'+courseData.title+"\n");
		courseData.videos.forEach( function(item) {
		 	// statements
		 	var chapterTitle = item.chapterTitle;
		 	console.log(chapterTitle+"\n");

			item.videos.forEach( function(video) {
				// statements
				console.log("    【"+video.id+"】 "+video.title+"\n");
			});

		 });
	});
	 
}
function getPageAsync(url) {
	 /* body... */ 
	 return new Promise(function (resolve,reject) {
	 	 /* body... */ 
	 	 console.log('正在爬取'+url)
	 	 http.get(url,function (res) {
			 var html='';
			 res.on('data',function (data) {
			 	 html+=data;
			 })
			 res.on('end',function () {
			 	//信息过滤
			 	resolve(html);
			 	// var courseData = filterChapters(html);
			 	// printCourseInfo(courseData);
			 })
		}).on('error',function (e) {
			reject(e)
			 console.log('获取课程数据出错')
		})
	 })
}
var fetchCourseArr = []

videoIds.forEach( function(id, index) {
	// statements
	//将多个请求获取的数据（html）放入1个数组
	fetchCourseArr.push(getPageAsync(baseUrl+id));
});

Promise
.all(fetchCourseArr)//等这个数组的promise动作完成做下面的事
.then(function (pages) {//pages即前面的fetchCourseArr
	 /* body... */ 
	 var coursesData = []
	 pages.forEach( function(html) {
	 	// statements
	 	var  courses = filterChapters(html)//从html中收取数据汇成一个数据对象
	 	 coursesData.push(courses);
	 })
	 coursesData.sort(function (a,b) {//排序
	 	 /* body... */ 
	 	 return a.number<b.number;
	 })
	 printCourseInfo (coursesData);//打印数据
})
// http.get(url,function (res) {
// 	 var html='';
// 	 res.on('data',function (data) {
// 	 	 html+=data;
// 	 })
// 	 res.on('end',function () {
// 	 	//信息过滤
// 	 	var courseData = filterChapters(html);
// 	 	printCourseInfo(courseData);
// 	 })
// }).on('error',function () {
// 	 console.log('获取课程数据出错')
// })
