# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `eqArrays`: checks if two arrays are equal
* `assertEqual`: runs assertion check on non arrays
* `assertArraysEqual`: runs assertion check on two arrays
* `head`: returns the first item of the array
* `middle`: returns items at the middle of the array
* `tail`: returns array after removing first item
* `assertObjectsEqual`: runs assertion check on two objects
* `countLetters`: counts all the letters in a string
* `eqObjects`: checks if two objects are equal
* `findKey`: finds the key of an object
* `findKeyByValue`: finds the key of an object based on the value of the key
* `flatten`: takes nested array and turns it into a non nested array
* `letterPositions`: returns the position of a letter in a given string
* `map`: does map stuff
* `takeUntil`: returns all items in the array until the given value
* `without`: returns all items in the array excluding the