// var person = new Object();

// person['firstname'] = 'Alvaro';
// person['lastname'] = 'Castillo';

// // Whole obj
// console.log(person);
// // The dot
// console.log(person.firstname, person.lastname);

// person.address = new Object();
// person.address.street = '434, Paseo Carrilleras';
// person.address.city = 'Guadalajara';
// person.address.state = 'JAL';
// person.address.country = 'MX';

// console.log(person.address);

// // Objects and Object literals
// var person = {
//   firstname: 'Alvaro',
//   lastname: 'Castillo',
//   address: {
//     street: '434 Paseo Carrilleras',
//     city: 'Guadalajara',
//     state: 'JAL',
//   },
// };

// function greet(person) {
//   console.log(`Hi ${person.firstname}`);
// }

// greet(person);

// // Faking namespaces

// var greet = 'Hello';
// var greet = 'Hola';

// console.log(greet);

// var english = {
//   greetings: {
//     basic: 'Hello',
//   },
// };
// var spanish = {};

// english.greet = 'Hola';

// console.log(english);

// /* *
//  * * Namespace: A container for variables and functions
//  * * Tipically to keep the same name on var and fn separate.
//  * */

// //  JSON.stringify(object) JSON.parse(JSON)

// // Functions are objects

// // First class objects

// function greet() {
//   console.log('Hi');
// }

// greet.language = 'english';

// console.log(greet.language);
// /* *
//  * * Everything you can do with other types
//  * * You can do with functions.
//  * */

// //  Functions statements and function expressions
// /* *
//  * * Expression: a unit of code that results
//  * * in a value.
//  * */

// var a;

// //  statement
// if (a === 3) {
//   console.log(a);
// }

// greet();

// function greet() {
//   console.log('Hia');
// }

// var anonymousGreet = function () {
//   console.log('hi');
// };

// anonymousGreet();

// function log(a) {
//   console.log(a);
// }

// log({ greeting: 'hi' });

// // By value
// var a = 3;
// var b;

// b = a;
// a = 2;

// console.log(a);
// console.log(b);

// // By reference
// var c = { greeting: 'Hello' };
// var d;

// d = c;
// c.greeting = 'Hi';

// console.log(c);
// console.log(d);

// // Mutate: to change something

// // By reference (even as parameters)
// function changeGreeting(obj) {
//   obj.greeting = 'Hola';
// }

// changeGreeting(d);
// console.log(c);
// console.log(d);

// // Equals operator sets up a new memory space (new address)
// c = { greeting: 'howdy' };
// console.log(c);
// console.log(d);

// // Objects, functions and this

// var f = {
//   name: 'The f object',
//   log: function () {
//     var self = this;
//     (self.name = 'Updated f object'), console.log(self);
//     var setname = function (newname) {
//       self.name = newname;
//     };

//     setname('Updated again the f object');
//     console.log(self);
//   },
// };

// f.log();

// // Arrays
// var arr = [
//   1,
//   false,
//   {
//     name: 'Alvaro',
//     address: 'Paseo Carrilleras 434',
//   },
//   function(name) {
//     var greeting = 'Hello there';
//     console.log(greeting + name);
//   },
//   "hello"
// ];

// console.log(arr);
// arr[3](arr[2].name);

// Arguments

// function greet(firstname, lastname, language, ...other) {
//     language = language || 'EN'

//     if (arguments.length === 0) {
//         console.log('Missing parameters');
//         console.log('---------------');
//         return;
//     }

//     console.log(firstname);
//     console.log(lastname);
//     console.log(language);
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log('----------');
// }

// greet()
// greet('John')
// greet('John', 'Doe')
// greet('John', 'Doe', 'ES', '111 Main st', 'New York')

/**
 * The parameters that you pass to a function
 */

// Function overloading
function greet(firstname, lastname, language) {
  language = language || 'en';

  if (language === 'en') {
    console.log(`Hello ${firstname} ${lastname}`);
  }

  if (language === 'es') {
    console.log(`Hola ${firstname} ${lastname}`);
  }
}

function greetEnglish(firstname, lastname) {
  greet(firstname, lastname, 'en');
}

function greetSpanish(firstname, lastname) {
  greet(firstname, lastname, 'es');
}

greetEnglish('John', 'Doe');
greetEnglish('Alvaro', 'Castillo');

// Whitespace
/*
    Invisible characters that create literal 'space' in your written code
*/

var firstname, lastname, langugage;

var person = {
  firstname: 'John',
  lastname: 'Doe',
};

console.log(person);

// (IFE)S - Immediatly Invoke Functions Expressions

// Function statement
// function greeting(name) {
//     console.log('Hello ' + name);
// }

// greeting('Alvaro');

// // Function expression
// var greetFunc = function(name) {
//     console.log('Hello ' + name);
// }

// greetFunc('Alvaro')

// Using IIFE'S
var greets = (function (name) {
  return 'Hello ' + name;
})('Alvaro');
console.log(greets);

var firstname = 'Jessica';

  (function (global, name) {
    var greeting = 'Inside IIFE: Hello ';
    global.greeting = 'Hello'
    console.log(greeting + name);
  }) // IIFE
(window, firstname);


