/* const person = {
  name: "dyl kate",
  age: "02",
  dob: "1-3-17"
};
module.exports = person; */
//Modula wrapper Function
// (function(exports, require, module, __filename, __dirname){

// })
//console.log(__dirname, __filename);

class Person {
  constructor(name1, age1) {
    this.name = name1;
    this.age = age1;
  }
  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`);
  }
}
module.exports = Person;
