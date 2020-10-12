// Function Constructors
function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.getFullName = function () {
  return this.firstname + ' ' + this.lastname;
};

var jess = new Person('Jessica', 'Gardea');
console.log(jess);

var alvaro = new Person('Alvaro', 'Castillo');
console.log(alvaro);

Person.prototype.getFormalFullName = function () {
  return this.firstname + ' ' + this.lastname;
};

console.log(jess.getFormalFullName());

console.log('----- function constructors ------');
/* *
 * * A normal function that is used to construct
 * * objects
 * */

//  Built in function constructors
String.prototype.isLengthGreaterThan = function (limit) {
  return this.length > limit;
};

console.log('John'.isLengthGreaterThan(3));

Number.prototype.isPositive = function () {
  return this > 0;
};

console.log('----- Built in function constructors ------');
// Object.create

// Polyfill

if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error(
        'Object create implementation' + 'Only accepts the first parameter'
      );
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname: 'Default',
  lastname: 'Default',
  greet: function () {
    return 'Hi ' + firstname;
  },
};

var jess = Object.create(person);
jess.firstname = 'Jess';
jess.lastname = 'Gardea';
console.log(jess);

console.log('----- Built in function constructors ------');
/* *
 * *  Polyfill: Code that adds a feature
 * *  which the engine may lack.
 * */
