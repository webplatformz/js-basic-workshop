(function (global, jasmine) {
    "use strict";

    describe("Exercise 2: Functions, Parameters & Arguments Object", function () {

        describe('Exercise 2.1: Implement the max function', function () {

            var maxFunc;

            beforeEach(function () {
                Math.max = jasmine.createSpy('max');
                maxFunc = global.ex2.max;
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

            it('should not use Math.max. We told you!', function () {
                maxFunc(5);
                expect(Math.max).not.toHaveBeenCalled();
            });

        });

        describe('Exercise 2.2: Implement the print function', function () {

            var printFunc;

            beforeEach(function () {
                printFunc = global.ex2.print;
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

    });

})(window, window.jasmine);