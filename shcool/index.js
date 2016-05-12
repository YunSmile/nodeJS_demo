var klass = require('./class.js');

exports.add=function(klasses){
	klasses.forEach( function(element, index) {
		// statements
		var teacher = element.teachername;
		var students = element.students;
		klass.add(teacher,students);
	});
}
// klass.add("scott",['学生1','学生2'])