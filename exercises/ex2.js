/**
 * JavaScript Basics Workshop - Exercise 2
 * Functions, Parameters & Arguments Object
 */

(function (global) {
    "use strict";

    // TODO: Exercise 1 - Implement a max function, which accepts one ore more arguments
    function max() {
        // YOUR CODE GOES HERE
    }

    // TODO: Exercise 2.a - Modify the function's signature
    //                  Note: The function accepts another function as first argument
    //                  Note: The function accepts a string value as second argument
    function print() {
        // TODO: Exercise 2.b - Check if the given function is defined, otherwise throw an exception
        // YOUR CODE GOES HERE
        // TODO: Exercise 2.c - Call the given function with the given value as parameter and return the result
        // YOUR CODE GOES HERE
    }

    global.ex2 = global.ex2 || {};
    global.ex2.max = global.ex2.max || max;
    global.ex2.print = global.ex2.print || print;
}(window));