/**
 * JavaScript Basics Workshop - Exercise 4
 * this, bind, new, and prototypes
 */

(function (global) {
    "use strict";

    // TODO: Exercise 4.1 - Bind the function 'fToBind' to the given 'context'.
    function bindIt(fToBind, context) {
        return fToBind.bind(context);
    }

    // TODO: Exercise 4.2 - Create a constuctor function that takes a 'name' argument.
    //                Note: Remember to use an upper-case name for the constructor.
    //                Note: First create a constructor without any properties
    //                Note: Properties are set on 'this'.
    //                Note: The prototype is inherited from <constructor-fn>.prototype.
    function createIt(prototype) {
        var Constructor = function Constructor(name) {
            this.name = name;
        };
        Constructor.prototype = prototype;

        return Constructor;
    }

    // TODO: Exercise 4.3 (optional) - Implement your own version of 'bind'.
    //                Note: Use the tests to guide you.
    //                Note: Good luck!
    function myBind(fToBind, context) {
        var fBound = function () {
            fToBind.call(context);
        };

        fBound.prototype = fToBind.prototype;

        return fBound;
    }

    // TODO: Exercise 4.3 (optional) - Implement your own version of Object.create().
    //                Note: Use the tests to guide you.
    //                Note: Good luck!
    function myObjectCreate(context) {
        var fNOP = function () {
        };
        fNOP.prototype = context;

        return new fNOP();
    }

    global.ex4 = global.ex4 || {};
    global.ex4.bindIt = global.ex4.bindIt || bindIt;
    global.ex4.createIt = global.ex4.createIt || createIt;
    global.ex4.myBind = global.ex4.myBind || myBind;
    global.ex4.myObjectCreate = global.ex4.myObjectCreate || myObjectCreate;
})(window);
