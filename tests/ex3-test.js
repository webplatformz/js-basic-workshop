"use strict";

describe('exercise 3 - scopes, iife & closures', function () {

    it('should be defined', function () {
        expect(window.ex3).toBeDefined();
    });

    describe('task 1 - global variable hello', function () {

        it('should be defined', function () {
            expect(window.hello).toBeDefined();
        });

        it('should have correct value', function () {
            expect(window.hello).toBe('world');
        });

    });

    describe('task 2 - closures', function () {

        var multiplyClosure;

        beforeEach(function () {
            multiplyClosure = window.ex3.multiplierClosure;
        });

        it('should be defined', function () {
            expect(multiplyClosure).toBeDefined();
        });

        it('should return stored factor', function () {
            var mult7 = multiplyClosure(7);
            expect(mult7.getFactor()).toBe(7);
        });

        it('should return product of two', function () {
            var mult2 = multiplyClosure(2);
            expect(mult2.multiply(3)).toBe(6);
        });

        it('should return product of three', function () {
            var mult3 = multiplyClosure(3);
            expect(mult3.multiply(4)).toBe(12);
        });

    });

});
