// Inheritance

/* *
 * * One object gets access to the properties
 * * and methods of another object.
 * */

var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function () {
    return this.firstname + ' ' + this.lastname;
  },
};

var jess = {
  firstname: 'Jessica',
  lastname: 'Gardea',
};

// Don't do this EVER! for demo purposes only
jess.__proto__ = person;
console.log(jess.getFullName());
console.log(jess.firstname);

// jane.__proto__ = person;

// console.log(jane.getFullName());

// Everything is an object

var a = {};
var b = function () {};
var c = [];

// reflection
/* *
 * * An object can look at itself
 * * listing and changing its properties
 * * and methods.
 * */

for (var prop in jess) {
  if (jess.hasOwnProperty(prop)) {
    console.log(prop + ': ' + jess[prop]);
  }
}

var jane = {
  address: 'Paseo Carrilleras 434',
  getFormalFullname: function () {
    return this.lastname + ' ' + this.firstname;
  },
};

var jim = {
  getFirstname: function () {
    return firstname;
  },
};

console.log(_.extend(jess, jane, jim));
