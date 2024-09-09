console.log("Prototypes in JS!");
//Javascript prototypes

//multiple levels of inheritance using prototype chains
// we are forming a prototype chain
// Object --> Person --> Student --> jim

// base object
let Person = {
  firstName: "",
  lastName: "",
  age: 0,
  fullName() {
    console.log(this);
    return `{${this.firstName} ${this.lastName}}`;
  },
};

let Student = {
    enrolledCourses: [],
    enroll(course) {
        this.enrolledCourses.push(course)
    }
}

Object.setPrototypeOf(Student, Person)

// inheriting object
//inherits all properties from Person, but can be overwritten
let jim = {
  firstName: "Jim",
};

// to set the prototype
Object.setPrototypeOf(jim, Student);

console.log("Jim", jim);

// to get the prototype

console.log(Object.getPrototypeOf(jim));

//or

// deprecated
console.log(jim.__proto__);

// to check if property belongs to it or its prototype
// false here
console.log(jim.hasOwnProperty("age"));


