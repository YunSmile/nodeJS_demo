var student = require('./student.js'); //利用require引入模块
var teacher = require('./teacher.js');

// teacher.add("scott");

function add(t_name, students) {
    // body...  
    teacher.add(t_name);

    students.forEach(function(item, index) {
        student.add(item);
    })
}
exports.add = add; //使用exports表示add是俘虏的方法
// module.exports = add;//使用module表示真实存在的
