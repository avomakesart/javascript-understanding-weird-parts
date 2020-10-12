// function greet(whattosay) {
//   return function (name) {
//     console.log(whattosay + ' ' + name);
//   };
// }

// var sayHi = greet('Hi');

// sayHi('Alvaro');

// function buildFunctions() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(function () {
//       console.log(i);
//     });
//   }
//   return arr;
// }

// var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();

// function buildFunctions2() {
//   var arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(
//       (function (j) {
//         return function () {
//           console.log(j);
//         };
//       })(i)
//     );
//   }
//   return arr;
// }

// var fs2 = buildFunctions2();

// fs2[0]();
// fs2[1]();
// fs2[2]();

// Closures and callbacks
function sayHiLater() {
  var greeting = 'Hi';

  setTimeout(function () {
    console.log(greeting);
  }, 3000);
}

sayHiLater();

function tellMeWhenImDone(callback) {
  var a = 1000;
  var b = 1000;

  callback();
}

tellMeWhenImDone(function () {
  console.log('I am done');
});

tellMeWhenImDone(function () {
  alert('I am done');
});

/* *
 * * Callback function:  A function you give to another function
 * * to be run when the other function is finished
 * */
