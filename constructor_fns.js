console.log("Constructor functions in JS!");

// Javascript constructor functions

//much easier way to create objects
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  //   this.fullName = function () {
  //     return `${this.firstName} ${this.lastName}`;
  //   };
}

// empty object (fullName has not been added yet but later will be)
console.log(Person.prototype);

// An object's prototype is the object instance from which
// the object was inherited

// A function's prototype is the object instance that will
// become the prototype for all objects created
// using this function as a constructor

// hence an empty prototype is created everytime we create a function, which
// becomes the prototype for objects created from it, hence we can set values to its
// prototype of the function

// is the best practice, we don't want each object created from Person
// to have its own, because its a waste of memory

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// new keywords:
// creates a new object in memory
// binds 'this' to the new object
// calls the function
// implicitly returns the newly created object
let jim = new Person("Jim", "Cooper", 29);

console.log(jim);

// returns true, in case of prototype example this would be false
console.log(jim.hasOwnProperty("firstName"));

console.log(jim.fullName());

// returns false
console.log(jim.hasOwnProperty("fullName"));

console.log(Person.prototype);

// defining getters and setters

function AnotherPerson(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

AnotherPerson.prototype = {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(fullName) {
    let nameParts = fullName.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  },
};

let tom = new AnotherPerson("Tom", "Holland", "26");

console.log(tom.fullName);
tom.fullName = "John Doe";
console.log(tom);

// static properties and methods

//defined
AnotherPerson.adultAge = 18;

// this method can't access instance (this)
AnotherPerson.isAdult = function (age) {
  return age >= Person.adultAge;
};

// belongs to the constructor function
// can not be accessed from the instance
console.log(AnotherPerson.adultAge);
console.log(AnotherPerson.isAdult(17));

// private properties and methods in constructor fns. using closures

function YetAnotherPerson(firstName, lastName, age) {
  // private property
  let adultAge = 18;
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // has to be an arrow fn., since it does not have a scope
  // private method
  let isReallyAdult = () => {
    return this.age >= 21;
  };

  this.isAdult = function () {
    // closure in use
    return this.age >= adultAge;
  };

  this.isQualified = function () {
    return isReallyAdult();
  };
}

let john = new YetAnotherPerson("John", "Doe", 18);

// true
console.log(john.isAdult());

// returns undefined
console.log(john.adultAge);

// false
console.log(john.isQualified());
