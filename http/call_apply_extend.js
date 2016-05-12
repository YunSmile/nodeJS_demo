/**
 * 继承
 * @authors Your Name (you@example.org)
 * @date    2016-04-07 10:45:41
 * @version $Id$
 */

/**
 * @class
 */
function Pet(words) {
    // body...  
    this.words = words;

    this.speak = function() {
        // body...  
        console.log(this.words);
    }
}
/**
 * 描述
 *
 * @class
 * @extends Pet
 */
function Dog(name, words) {
    // body...  
    Pet.call(this, words); //用当前对象去执行Pet方法
    this.name = name;
    // Pet.apply(this,arguments);
}
var pet = new Pet('...');
var dog = new Dog('狗', '汪');

dog.speak(); //汪
console.log(dog.name); //狗
console.log(pet.name); //undefined
