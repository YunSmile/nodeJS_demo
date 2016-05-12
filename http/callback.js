function learn (something) {
	 // body...  
	 console.log(something);
}
function we (callback,something) {
	 // body...  
	 something += " is cool"
	 callback(something)
}

we (learn,"Node.js")

we (function(something){
	 console.log(something);
},"jade")