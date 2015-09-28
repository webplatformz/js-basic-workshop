"use strict";

describe('Exercise 1.1', function () {

    var exercise11;

    beforeEach(function () {
        exercise11 = window.ex1.exercise11;
    });

    it('should return an object', function () {
        var object = window.ex1.exercise11();
        expect(object).toBeDefined();
        expect(typeof object).toEqual('object');
    });

    it('should return an object with a valid number property', function () {
        var number = getFirstPropertyWhichMeetsCondition(exercise11(), isFiniteNumber);
        expect(number).toBeDefined();
    });

    it('should return an object with a non-empty string property', function () {
        var string = getFirstPropertyWhichMeetsCondition(exercise11(), isString);

        expect(string).toBeDefined();
        expect(string.length).toBeGreaterThan(0);
    });

    it('should return an object with a boolean property', function () {
        var boolean = getFirstPropertyWhichMeetsCondition(exercise11(), isBoolean);

        expect(boolean).toBeDefined();
        expect(boolean === true || boolean === false).toBeTruthy();
    });

    it('should return an object with an non-empty array property', function () {
        var array = getFirstPropertyWhichMeetsCondition(exercise11(), isArray);

        expect(array).toBeDefined();
        expect(array.length).toBeGreaterThan(0);
    });

    it('should return an object with another object property', function () {
        var object = getFirstPropertyWhichMeetsCondition(exercise11(), isObjectAndNotArray);

        expect(object).toBeDefined();
    });

    it('should return an object with a function property', function () {
        var func = getFirstPropertyWhichMeetsCondition(exercise11(), isFunction);
        expect(func).toBeDefined();
    });

    function getFirstPropertyWhichMeetsCondition(object, condition) {
        if (typeof object !== 'object') {
            return undefined;
        }
        if (typeof condition !== 'function') {
            return undefined;
        }

        for (var property in object) {
            if (object.hasOwnProperty(property)) {
                if (condition(object[property]) === true) {
                    return object[property];
                }
            }
        }
        return undefined;
    }

    function isFiniteNumber(value) {
        if (typeof value !== 'number' || value === null) {
            return false;
        }
        return !isNaN(value) && isFinite(value);
    }

    function isString(value) {
        return typeof value === 'string';
    }

    function isBoolean(value) {
        return typeof value === 'boolean';
    }

    function isArray(value) {
        if (typeof value !== 'object') {
            return false;
        }
        return Object.prototype.toString.apply(value) === '[object Array]';
    }

    function isObjectAndNotArray(value) {
        return typeof value === 'object' && !isArray(value);
    }

    function isFunction(value) {
        return typeof value === 'function';
    }
});

describe('Exercise 1.2', function () {

    it('should reverse the array, append its original length at the tail and then sort it', function () {
        var array = [7, 1, 3];
        spyOn(array, 'push').and.callThrough();
        spyOn(array, 'reverse').and.callThrough();
        spyOn(array, 'sort').and.callThrough();

        window.ex1.exercise12(array);

        expect(array.reverse).toHaveBeenCalled();
        expect(array.push).toHaveBeenCalledWith(3);
        expect(array.sort).toHaveBeenCalled();

        expect(array.length).toEqual(4);
        expect(array[0]).toEqual(1);
        expect(array[1]).toEqual(3);
        expect(array[2]).toEqual(3);
        expect(array[3]).toEqual(7);
    });

});

describe('Exercise 1.3', function () {

    it('should return a RegExp to match the string \'sam\'', function () {
        var expression = window.ex1.exercise13();
        expect(isRegExp(expression)).toBeTruthy();
        expect(expression.test('sam')).toBeTruthy();
    });

    function isRegExp(value) {
        return typeof value === 'object' && value instanceof RegExp;
    }

});

describe('Exercise 1.4', function () {

    function isString(value) {
        return typeof value === 'string';
    }

    it('should throw an exception with name and message', function () {
        var exception;
        try {
            window.ex1.exercise14();
        } catch (e) {
            exception = e;
        }
        expect(exception).toBeDefined();
        expect(exception.name).toBeDefined();
        expect(exception.message).toBeDefined();
        expect(isString(exception.name)).toBeTruthy();
        expect(isString(exception.message)).toBeTruthy();
    });

});