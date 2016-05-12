/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 10:40:33
 * @version $Id$
 */

var pet ={
	words:"...",
	speak:function (say) {
		 // body...  
		 console.log(say+' '+this.words);
	}
}
pet.speak('Speak');

var dog ={
	words:'汪'
}

pet.speak.call(dog,"Speak");//将dog作为对象执行speak方法
