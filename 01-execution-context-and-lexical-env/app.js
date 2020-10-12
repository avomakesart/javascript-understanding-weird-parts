// Hoisting
console.log('- Hoisting -');
b();
console.log(a);

var a = 'Hello world';

function b() {
  console.log('Called b!');
}

b();
console.log(a);

/* *
 * * Hoisting is JavaScript's default behavior
 * * of moving declarations to the top.
 * */

//  Undefined
console.log('- Undefined -');
var a;
console.log(a);

if (a === undefined) {
  console.log('a is undefined');
} else {
  console.log('a is defined');
}

/* *
 * * Variables are set it as undefined by default.
 * */

//  Code Execution
console.log('- Code Execution -');
function b() {
  console.log('Called b!');
}

b();
console.log(a); // undefined beacuse it's not defined yet.

var a = 'Hello world';

console.log(a); // Hello world

// Invocation and execution stack

function b() {}

function a() {
  b();
}

a();

//

function a() {
  b();
  var c;
}

function b() {
  var d;
}

a();
var d;

// Functions, context, and variable environments
console.log('- Fn, Context, and env vars -');
function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar = 1;
console.log(myVar);
a();

// Scope Chain
console.log('- Scope Chain -');

function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

// We change the lexical env

function a() {
  function b() {
    console.log(myVar);
  }

  var myVar = 2;
  b();
}

var myVar = 1;
a();

/* *
 * * JavaScript resolves identifiers within a particular context
 * * by traversing up the scope chain, moving from locally to globally.
 * */

//  Scope, ES6, and let
if (a > b) {
  let c = true; // Just available in here (local)
}

// Asynchronous Callbacks - (More than one at a time)
console.log('- Asynchronous Callbacks -');
function waitThreeSeconds() {
  var ms = 3000 + new Date().getTime();
  while (new Date() < ms) {
    console.log('Finished function');
  }
}

function clickHandler() {
  console.log('Click event');
}

// Listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('Finished execution');
