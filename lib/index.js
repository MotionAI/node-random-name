var Alea = require('alea');
var names = require('./names');

var _getName = function(random, which) {
  var list = names[which];
  var idx = (random() * list.length) >>> 0;
  return list[idx];
};

var _getFirstName = function(random) {
  return _getName(random, "first");
};

var _getLastName = function(random) {
  return _getName(random, "last");
};

var getName = function(options) {
  options = options || {};
  var random = options.random ||
      (options.seed ? new Alea(options.seed) : new Alea());

  if (options.first) {
    return _getFirstName(random);
  }
  if (options.last) {
    return _getLastName(random);
  }
  return _getFirstName(random) + " " + _getLastName(random);
};

module.exports = getName;

if (false) {
  /* self-test: validate names */
  [names.first,names.last].forEach(function(arr) {
    arr.forEach(function(n) {
      if (!/^[A-Z][a-z]*$/.test(n)) { console.log(n); }
    });
  });
}
