/* jshint node: true */

/*
 * expose
 */

module.exports = tableize;

/*
 * tableize
 *
 * @param {String}
 */

function tableize(str) {
  var lines = prepare(str);
  var keys = lines.shift();
  return build(keys, lines);
}

/*
 * rowsObject returns a single object where the first column is used as the key and 
 * the 2nd column is used as the key
 *
 * @param {String} str
 * @return {Object}
 */

tableize.rowsObject = function(str) {
  var lines = prepare(str);
  return lines.reduce(function(memo, o) {
    memo[o[0]] = o[1];
    return memo;
  }, {});
};

/*
 * prepare prepares a string block into an array of rows of cells of strings
 *
 * @param {String} string
 * @return {Array}
 */

function prepare(str) {
  var lines = str.split(/\n/);
  var i = 0;
  var len = lines.length;
  for(; i<len; i++) {
    var line = lines[i].split("|");
    lines[i] = normalize(line);
  }

  return lines;
}

/*
 * build turns an array of keys and array of rows and creates an array of objects
 *
 * @param {Array} keys
 * @param {Array} rows (array of an array of strings)
 * @return {Array} (array of objects)
 */

function build(keys, rows) {
  var table = [];
  var i = 0;
  var len = rows.length;
  for(; i<len; i++) {
    var obj = rows[i].reduce(objectify.bind(keys), {});
    table.push(obj);
  }
  return table;
}

/*
 * objectify is the reduce function taken out of the for loop
 */

function objectify(memo, val, n) {
  memo[this[n]] = val;
  return memo;
}

/*
 * normalize removefirstandlast then trims
 *
 * @param {Array} arr (array of strings)
 * @return {Array}
 */

function normalize(arr) {
  arr = removeFirstAndLast(arr);
  return trim(arr);
}

/*
 * removefirstandlast slices off the first and last time in the array, should both be blank
 *
 * @param {Array} arr
 * @return {Array}
 */

function removeFirstAndLast(arr) {
  return arr.slice(1, arr.length-1);
}

/*
 * trim iterates through array and trims each element
 *
 * @param {Array} arr (array of strings)
 * @return {Array}
 */

function trim(arr) {
  var i = 0;
  var len = arr.length;
  var trimmed = [];
  for(; i<len; i++) {
    trimmed.push(arr[i].trim());
  }
  return trimmed;
}
