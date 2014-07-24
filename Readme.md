# table-ize

[![Build Status](https://travis-ci.org/nowk/table-ize.js.svg?branch=master)](https://travis-ci.org/nowk/table-ize.js)
[![Code Climate](https://codeclimate.com/github/nowk/table-ize.js.png)](https://codeclimate.com/github/nowk/table-ize.js)
[![David DM](https://david-dm.org/nowk/table-ize.js.png)](https://david-dm.org/nowk/table-ize.js)

Turn markdown style(ish) table syntax to an array of objects.

## Install

    npm install table-ize

## Example


Turns a string like this:

    | one | two | three |
    | a   | b   | c     |
    | d   | e   | f     |

To this:

    [
      {one: "a", two: "b", three: "c"},
      {one: "d", two: "e", three: "f"}
    ]


### License

MIT
