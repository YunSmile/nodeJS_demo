/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 09:56:33
 * @version $Id$
 */

var globaVariable = "this is global variable";

function globalFunction () {
	 // body...  
	 var loclVarible = "THis is local variable";

	 console.log('visit global/local variable');
	 console.log(globaVariable);
	 console.log(loclVarible);

	 globaVariable = "this is changed variable";
	 console.log(globaVariable);

	 function localFunction (argument) {
	 	 // body...  
	 	 var innerLocalVariable = "THis is inner local variable";

	 	 console.log('visit global/local/innerlocal variable')
	 	 console.log(innerLocalVariable);
	 	 console.log(globaVariable);
	 	 console.log(loclVarible);
	 }
	 localFunction ();
}
 globalFunction ();