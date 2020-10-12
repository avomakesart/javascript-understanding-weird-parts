;(function (global, $) {
  // 'new' an object
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es'];

  // Informal greeting
  var greetings = {
    en: 'Hello',
    es: 'Hola',
  };

  // Formal greeting
  var formalGreeting = {
    en: 'Greetings',
    es: 'Saludos',
  };

  // Logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesión',
  };

  // Prototype holds methods (to save money space)
  Greetr.prototype = {
    // 'this' refers to the calling object at excecution time
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function () {
      // Check that is a valid language
      // References the externally inaccessible 'supportedLangs' whitin the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    // retrieve messages from object by referring to properties using [] syntax
    greeting: function () {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function () {
      return formalGreeting[this.language] + ' ' + this.fullName();
    },

    // chainable methods return their own containing object
    greet: function (formal) {
      var msg;

      // if undefined or null it will be coerced to 'false
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      // make chainable
      return this;
    },

    setLang: function (lang) {
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw 'JQuery not loaded';
      }

      if (!selector) {
        throw 'Missing JQuery selector';
      }

      // determine the message
      var msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      // inject the message in the chosen place in the DOM
      $(selector).html(msg);

      // make chainable
      return this;
    },
  };

  // the actual object is created here, allowing us to 'new' an object without calling 'new'
  Greetr.init = function (firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  };

  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;

  // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);
