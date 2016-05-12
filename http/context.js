/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 10:12:53
 * @version $Id$
 */
var pet ={
	words:'...',
	speak:function  (argument) {
		 // body... 
		 console.log(this.words); //...
		 console.log(this===pet); //true
	}
}
pet.speak();

function pet2 (words) {
	 // body...  
	 this.words = words;

	 console.log(this.words);
	 console.log(this);//是node环境最顶层的对象global
	 console.log(this === global);
}

pet2('...');


function pet3 (words) {
	 /* body... */ 
	 this.words = words;
	 this.speak = function () {
	 	 /* body... */ 
	 	 console.log(this.words);
	 	 console.log(this);//指向pet3的实例对象
	 }
}
var cat = new pet3("miao");
cat.speak();