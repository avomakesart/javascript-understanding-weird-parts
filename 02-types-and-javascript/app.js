// Primitive types
console.log(
  'Primitive types: ' + 'undefined, null, boolean, number, string, symbol (es6)'
);

// Infix notation
3 + 4;

// Operators
console.log('> < + - += =+ / * %');

// Cohertion
// Convertion a value to another
var a = 1 + '2';
console.log(a);

// Comparison operators
console.log(3 < 2 < 1); // From left to right = true

var a = 1;
var b = 0;

if (a === b) {
  console.log('They are equal');
} else {
  console.log('Thery are not equal');
}

// Existence and Booleans
var a;

if (a) {
  console.log('Something is there');
}

// Default values

function greet(name) {
  name = name || 'Alvaro';
  console.log(`Hello ${name}`);
}

greet('');
