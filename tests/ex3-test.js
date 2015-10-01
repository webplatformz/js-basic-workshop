(function (global) {
    "use strict";

    describe('Exercise 3.1: Create a global variable hello', function () {

        it('should be defined', function () {
            expect(window.hello).toBeDefined();
        });

        it('should have correct value', function () {
            expect(window.hello).toBe('world');
        });

    });

    describe('Exercise 3.2: Implement a closure for multiplication', function () {

        var multiplyClosure;

        beforeEach(function () {
            multiplyClosure = window.ex3.multiplierClosure;
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

})(window);