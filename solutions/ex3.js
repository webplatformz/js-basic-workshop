/**
 * JavaScript Basics Workshop - Exercise 3
 * Scopes, IIFE & Closures
 */

(function (global) {
    "use strict";

    // TODO: Exercise 3.1 - Declare a variable named 'hello' with the string value 'world' into the global scope.
    var hello = 'world';

    // TODO: Exercise 3.2 - Create a multiplier closure which holds a factor given as parameter
    //            Note: The closure returns an object which exposes two closure functions 'getFactor' and 'multiply'
    //            Note: 'getFactor' returns the given factor of the closure
    //            Note: 'multiply' takes a parameter and returns the product of the given parameter and the stored factor
    var multiplierClosure = function (factor) {
        function getFactor() {
            return factor;
        }

        function multiply(x) {
            return factor * x;
        }

        return {
            multiply: multiply,
            getFactor: getFactor
        }
    };

    global.ex3 = global.ex3 || {};
    global.ex3.multiplierClosure = global.ex3.multiplierClosure || multiplierClosure;
    global.hello = global.hello || hello;
}(window));