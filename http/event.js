/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 09:50:58
 * @version $Id$
 */
function clickIt (e) {
	 // body...  
	 window.alert('Button is clicked');
}
var button = document.getElementById('#button');
button.addEventListener('click', clickIt);

// EventEmitter