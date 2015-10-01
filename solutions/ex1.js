/**
 * JavaScript Basics Workshop - Exercise 1
 * Objects, Arrays & Dates
 */

(function (global) {

    "use strict";

    // TODO Exercise 1.1 - Return an object containing the following properties:
    //                     - a valid, finite number
    //                     - a non-empty string
    //                     - a non-empty array
    function exercise11() {
        return {
            myNumber: 42,
            myString: 'hello',
            myArray: [1, 2, 3]
        };
    }

    // TODO Exercise 1.2 - Use the standard array methods to:
    //                     - reverse the array
    //                     - append the original array length as element at the end
    function exercise12(array) {
        array.reverse();
        array.push(array.length);
    }

    // TODO Exercise 1.3 - Return a Date object which represents the 29th February 2000
    function exercise13() {
        return new Date(2000, 1, 29);
    }

    // TODO Exercise 1.4 - Return true if:
    //                     - the given value is NaN but not undefined
    //                     - OR the given value is a Boolean
    //                     - OR the given value equals 42
    function exercise14(value) {
        return isNaN(value)
            || typeof value === 'boolean'
            || value === 42;
    }

    global.ex1 = global.ex1 || {};
    global.ex1.exercise11 = global.ex1.exercise11 || exercise11;
    global.ex1.exercise12 = global.ex1.exercise12 || exercise12;
    global.ex1.exercise13 = global.ex1.exercise13 || exercise13;
    global.ex1.exercise14 = global.ex1.exercise14 || exercise14;
}(window));