"use strict";


// Exercise 1.1 - objects
function exercise11() {
    return {
        myNumber: 42,
        myString: 'hello',
        myBoolean: true,
        myArray: [1, 2, 3],
        myObject: {},
        myFunction: function () {
        }
    };
}

// Exercise 1.2 - arrays
function exercise12(array) {
    array.reverse();
    array.push(array.length);
    array.sort();
}

// Exercise 1.3 - regexp
function exercise13() {
    return /sam/;
}

// Exercise 1.4 - exceptions
function exercise14() {
    throw {
        name: 'MyName',
        message: 'my message'
    };
}
