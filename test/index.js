/* jshint node: true */

var assert = require("chai").assert;
var heredoccy = require("here-doccy");
var table = require("..");

var heredoc = (function(opts) {
  return function(fn) {
    return heredoccy(fn, opts);
  };
})({stripLeading: true});


describe("--", function() {
  it("converts a markdown table style block into an array of objects", function() {
    var converted = table(heredoc(function() {/*
      | one | two | three |
      | a   | b   | c     |
      | d   | e   | f     |
    */}));

    assert.deepEqual(converted, [
      {one: "a", two: "b", three: "c"},
      {one: "d", two: "e", three: "f"}
    ]);
  });

  describe(".rowsObject", function() {
    it("creates a single object where 1st column is the key and 2nd is the value", function() {
      var obj = table.rowsObject(heredoc(function() {/*
        | one   | a |
        | two   | b |
        | three | c |
      */}));

      assert.deepEqual(obj, {
        one: "a",
        two: "b",
        three: "c"
      });
    });
  });
});
