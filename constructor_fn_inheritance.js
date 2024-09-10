console.log("Constructor function inheritance in JS!");

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.isAdult = function () {
  return this.age >= 18;
};

// way of defining abstract method in javascript
Person.prototype.someAbstractFn = function () {
  throw new Error("Must be implemented");
};

function Student(firstName, lastName, age) {
  // step 2)
  // if directy invoke Person then 'this' will be undefined
  // hence we want the function call to have context
  Person.call(this, firstName, lastName, age);
  this.courses = [];
}

// step 1)
// setting Student fn's prototype to a new object
// which has Person fn's prototype as its prototype
// we create a new object becaus we don't want both to point to the same
// since adding to Student prototype will also pollute Person
Student.prototype = Object.create(Person.prototype);

// step 3)
// for accuracy, since any Student object will
//created using the Student constructor
Student.prototype.constructor = Student;

Student.prototype.enroll = function (course) {
  this.courses.push(course);
};

// override
Student.prototype.isAdult = function () {
  return this.age >= 21;
};

// this has to be overriden else error gets thrown
Student.prototype.someAbstractFn = function () {
  console.log("Implemented on Student!");
};

let jim = new Student("Jim", "Cooper", 29);
jim.enroll({ courseId: "CS100" });
console.log(jim.courses[0]);
console.log(jim.isAdult());

console.log(jim);
// prints the Student constructor fn. as we have set it above
console.log(jim.constructor.toString());
//both true
console.log(jim instanceof Student);
console.log(jim instanceof Person);

//polymorphism in javascript

// since javascript is a loosely typed language
// you don't get any compile time enforcements for
// performing polymorphism
let jimPerson = new Person("Jim", "Cooper", 18);
let jimStudent = new Student("Jim", "Cooper", 18);

// true
console.log(jimPerson.isAdult());
// false
console.log(jimStudent.isAdult());

// throws an error
// jimPerson.someAbstractFn();
jimStudent.someAbstractFn();
