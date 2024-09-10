console.log("Classes in JS!");

// inheritance in javascript using classes

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  isAdult() {
    return this.age >= 18;
  }

  someAbstractMethod() {
    throw new Error("Needs to be implemented");
  }
}

class Student extends Person {
  courses = [];

  constructor(firstName, lastName, age, courses) {
    // mandatory to call super first
    super(firstName, lastName, age);
    this.courses = courses;
  }

  enroll(course) {
    this.courses.push(course);
  }

  // override
  isAdult() {
    return this.age >= 21;
  }

  someAbstractMethod() {
    console.log("Implemented by Student");
  }
}

// parent class constructor automatically gets called if none provided
let jim = new Student("Jim", "Cooper", 29);
console.log(jim.firstName);

//both true
console.log(jim instanceof Student);
console.log(jim instanceof Person);

// polymorphism with classes
let jimPerson = new Person("Jim", "Cooper", 18);
let jimStudent = new Student("Jim", "Cooper", 18);

// true
console.log(jimPerson.isAdult());
// false
console.log(jimStudent.isAdult());

// abstract methods

// gives error
// jimPerson.someAbstractMethod();

jimStudent.someAbstractMethod();