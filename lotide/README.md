# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @otbi/lotide`

**Require it:**

`const _ = require('@otbi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertEqual(...)`: A function that compares two arrays and print out a message telling us if they match or not
- `head(...)`: A function which returns the first item in the array.
- `tail(...)`: A function which returns everything except for the first item of the provided array.
- `eqArrays(...)`: A function which takes in two arrays and returns true or false, based on a perfect match.
- `assertArraysEqual(...)`: A function which will take in two arrays and return an appropriate message to the console.
- `without(...)`: A function which will return a subset of a given array, removing unwanted elements.
- `flatten(...)`: A function which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
- `middle(...)`: A function which will take in an array and return the middle-most element(s) of the given array - two elements if even and one if odd.
- `countOnly(...)`: This function takes in a collection of items and return counts for a specific subset of those items.
- `countLetters(...)`: A function which will take in a sentence (as a string) and then return a count of each of the letters in that sentence.
- `letterPositions(...)`: A function which will return all the indices (zero-based positions) in the string where each character is found.
- `findKey(...)`: A function which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `eqObjects(...)`: A function which will take in two objects and returns true or false, based on a perfect match.
- `assertObjectsEqual(...)`: A function which will take in two objects and console.log an appropriate message to the console.
- `map(...)`: A function which will take in two arguments - An array to map & A callback function. The map function will then return a new array based on the results of the callback function.
- `findKeyByValue(...)`: A function which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
- `takeUntil(...)`: A function which will keep collecting items from a provided array until the callback provided returns a truthy value.
