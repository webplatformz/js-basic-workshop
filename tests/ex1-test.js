(function (global) {
    "use strict";

    describe('Exercise 1.1: Return an object containing properties', function () {

        var exercise11;

        beforeEach(function () {
            exercise11 = global.ex1.exercise11;
        });

        it('should return an object', function () {
            var object = exercise11();
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

        it('should return an object with an non-empty array property', function () {
            var array = getFirstPropertyWhichMeetsCondition(exercise11(), isArray);

            expect(array).toBeDefined();
            expect(array.length).toBeGreaterThan(0);
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

        function isArray(value) {
            if (typeof value !== 'object') {
                return false;
            }
            return Object.prototype.toString.apply(value) === '[object Array]';
        }
    });

    describe('Exercise 1.2: Use the standard array methods', function () {

        it('should reverse the array, append its original length at the tail and then sort it', function () {
            var array = [7, 1, 3];
            spyOn(array, 'push').and.callThrough();
            spyOn(array, 'reverse').and.callThrough();

            global.ex1.exercise12(array);

            expect(array.reverse).toHaveBeenCalled();
            expect(array.push).toHaveBeenCalledWith(3);

            expect(array.length).toEqual(4);
            expect(array[0]).toEqual(3);
            expect(array[1]).toEqual(1);
            expect(array[2]).toEqual(7);
            expect(array[3]).toEqual(3);
        });

    });

    describe('Exercise 1.3: Return a Date object', function () {

        it('should return date: 29th February 2000', function () {
            var date = global.ex1.exercise13();
            expect(date).toEqual(new Date(2000, 1, 29));
        });

    });

    describe('Exercise 1.4: Check if true', function () {

        it('should return true when given NaN', function () {
            var boolean = global.ex1.exercise14(NaN);
            expect(boolean === true).toBeTruthy();
        });

        it('should return true when given a boolean', function () {
            var boolean1 = global.ex1.exercise14(true);
            var boolean2 = global.ex1.exercise14(false);
            expect(boolean1 === true).toBeTruthy();
            expect(boolean2 === true).toBeTruthy();
        });

        it('should return true when given the number 42', function () {
            var boolean = global.ex1.exercise14(42);
            expect(boolean === true).toBeTruthy();
        });

        it('should return false when given the string "42"', function () {
            var boolean = global.ex1.exercise14('42');
            expect(boolean === false).toBeTruthy();
        });
    });

})(window);
