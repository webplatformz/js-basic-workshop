/**
 * JavaScript Basics Workshop - Exercise 1
 * Objects, Arrays, Regexp & Exceptions
 */

(function (global) {

    "use strict";

    // TODO Exercise 1.1 - Return an object containing the following properties:
    //                     - a valid, finite number
    //                     - a non-empty string
    //                     - a boolean property
    //                     - a non-empty array
    //                     - another object
    //                     - a function
    function exercise11() {
        // YOUR CODE GOES HERE
    }

    // TODO Exercise 1.2 - Use the standard array methods to:
    //                     - use the standard array methods to:
    //                     - reverse the array
    //                     - append the original array length as element at the end
    //                     - then sort the array
    function exercise12(array) {
        // YOUR CODE GOES HERE
    }

    // TODO Exercise 1.3 - Return true when:
    //                     - the given value is NaN but not undefined
    //                     - OR the given value is a Boolean
    //                     - OR the given value equals 42
    function exercise13(value) {
        // YOUR CODE GOES HERE
    }

    // TODO Exercise 1.4 - Return a RegExp which matches the string 'sam'
    function exercise14() {
        // YOUR CODE GOES HERE
    }

    // TODO Exercise 1.5 - Throw an exception object with a name and message property
    function exercise15() {
        // YOUR CODE GOES HERE
    }

    // TODO Exercise 1.6 - Return a Date object which represents the 29th February 2000
    function exercise16() {
        // YOUR CODE GOES HERE
    }

    global.ex1 = global.ex1 || {};
    global.ex1.exercise11 = global.ex1.exercise11 || exercise11;
    global.ex1.exercise12 = global.ex1.exercise12 || exercise12;
    global.ex1.exercise13 = global.ex1.exercise13 || exercise13;
    global.ex1.exercise14 = global.ex1.exercise14 || exercise14;
    global.ex1.exercise15 = global.ex1.exercise15 || exercise15;
    global.ex1.exercise16 = global.ex1.exercise16 || exercise16;
}(window));