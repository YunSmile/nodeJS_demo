/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 09:38:15
 * @version $Id$
 */
 // <script src="a.js"></script>
 // <script src="b.js"></script>
 // <script src="c.js"></script>
// var  i =0
// while (true) {//会阻塞在这里
// 	// statement
// 	i++;
// }
var c=0;
function printIt () {
	 // body... 
	 console.log(c); 
}

function plus (callback) {
	 // body...  
	 setTimeout(function () {
	 	c+=1;  
	 	callback();
	 }, 1000);
}
plus(printIt)
