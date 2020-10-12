// Bind
var person = {
  firstname: 'Jessica',
  lastname: 'Gardea',
  getFullName: function () {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  },
};

var logName = function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments ' + lang1 + ' ' + lang2);
  console.log('-----------');
};

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en', 'es'); // strings
logName.apply(person, ['en', 'es']);
// should have arrays
(function (lang1, lang2) {
  console.log('Logged: ' + this.getFullName());
  console.log('Arguments ' + lang1 + ' ' + lang2);
  console.log('-----------');
}.apply(person, ['en', 'es']));

// Function borrowing
var person2 = {
  firstname: 'Alvaro',
  lastname: 'Castillo',
};

console.log(person.getFullName.apply(person2));

// Function currying
function multiply(a, b) {
  return a * b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));

/* *
 * * Function currying: creating a copy of a function but
 * * with some presets parameters.
 * */
