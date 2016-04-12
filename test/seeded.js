// The seeded results should never change.
var assert = require('assert');
var random_name = require('../');

var SEED = "The quick brown fox jumped over the lazy dog."

describe("Seeded tests", function() {
  // it("should return a male first name", function() {
  //   assert.equal(random_name({seed:SEED, male:true}), "Purple");
  // });
  // it("should return a female first name", function() {
  //   assert.equal(random_name({seed:SEED, female:true}), "Purple");
  // });
  it("should return a first name", function() {
    assert.equal(random_name({seed:SEED, first:true}), "Purple");
  });
  it("should return a last name", function() {
    assert.equal(random_name({seed:SEED, last:true}), "Robot");
  });
  it("should return a full name", function() {
    assert.equal(random_name({seed:SEED}), "Purple Racecar");
  });
});
