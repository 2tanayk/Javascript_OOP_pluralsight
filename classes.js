console.log("Classes in JS!");

// OOP in javascript using classes
class Person {
  // static property
  static adultAge = 18;

  // these properties can be commented
  // out and code will still work but we keep it for readability
  firstName = "";
  lastName = "";
  age = 0;

  // private property
  #qualifiedAge = 21;

  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // static method
  static isAdult(age) {
    return age >= Person.adultAge;
  }

  isAdult() {
    return Person.isAdult(this.age);
  }

  // private method
  #checkIfQualified() {
    return this.age >= this.#qualifiedAge;
  }
  isQualified() {
    return this.#checkIfQualified();
  }

  // getter and setter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    let nameParts = fullName.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }
}

// new keyword
// creates a new object
// binds this to the new object
// adds properties to this
// calls the class constructor
// implicitly returns the new object
let jim = new Person("Jim", "Cooper", 29);
console.log(jim);
console.log(jim.isAdult());
// Jim Cooper
console.log(jim.fullName);
jim.fullName = "John Doe";
// John Doe
console.log(jim.fullName);

// false
console.log(Person.isAdult(8));

// true
console.log(jim.isQualified());
