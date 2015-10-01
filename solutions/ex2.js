/**
 * JavaScript Basics Workshop - Exercise 2
 * Functions, Parameters & Arguments Object
 */

(function (global) {
    "use strict";

    // TODO: Exercise 2.1 - Implement a max function, which accepts one ore more arguments
    //                      Note: Using the Math.max function is not allowed!
    function max() {
        var max = -Infinity;
        for (var i = 0; i < arguments.length; i++) {
            if (max < arguments[i]) {
                max = arguments[i];
            }
        }
        return max;
    }

    // TODO: Exercise 2.2 - Modify the function's signature
    //                  Note: The function accepts another function as first argument
    //                  Note: The function accepts a string value as second argument
    function print(formatFunc, value) {
        // TODO: Exercise 2.2.1 - Check if the given function is defined, otherwise throw an exception
        if (!formatFunc) {
            throw new Error('No formatFunc given');
        }
        // TODO: Exercise 2.2.2 - Call the given function with the given value as parameter and return the result
        return formatFunc(value);
    }

    global.ex2 = global.ex2 || {};
    global.ex2.max = global.ex2.max || max;
    global.ex2.print = global.ex2.print || print;
}(window));