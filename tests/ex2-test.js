"use strict";

describe('Exercise 2.1: Implement the max function', function () {

    var maxFunc;

    beforeEach(function () {
        maxFunc = window.ex2.max;
    });

    it('should be defined', function () {
        expect(maxFunc).toBeDefined();
    });

    it('should return undefined if no argument given', function () {
        expect(maxFunc()).toBeUndefined();
    });

    it('should return max given single argument', function () {
        expect(maxFunc(2)).toBe(2);
    });

    it('should return max given two arguments', function () {
        expect(maxFunc(-3, 5)).toBe(5);
    });

    it('should return max given three arguments', function () {
        expect(maxFunc(-3, 2, 5)).toBe(5);
    });

});

describe('Exercise 2.2: Implement the print function', function () {

    var printFunc;

    beforeEach(function () {
        printFunc = window.ex2.print;
    });

    it('should be defined', function () {
        expect(printFunc).toBeDefined();
    });

    it('should throw an exception if no function parameter is given', function () {
        expect(printFunc).toThrow();
    });

    it('should throw an exception if no function parameter is given', function () {
        var spy = jasmine.createSpy('formatFunc');
        printFunc(spy, 'test');
        expect(spy).toHaveBeenCalledWith('test');
    });

    it('should return a correct result', function () {
        function formatFunc(name) {
            return 'Hello ' + name;
        }

        expect(printFunc(formatFunc, 'World')).toBe('Hello World');
    });

});
