"use strict";

var callback51;

describe("Exercise 5.1", function () {
    beforeEach(function () {
        jasmine.Ajax.install();

        jasmine.Ajax.stubRequest(
            /.*/
        ).andReturn({
                status: 200,
                statusText: 'HTTP/1.1 200 OK',
                contentType: 'text/plain',
                responseText: 'all good'
            });
    });

    afterEach(function () {
        jasmine.Ajax.uninstall();
    });

    it("should call a rest resource", function () {
        exercise51();

        var request = jasmine.Ajax.requests.mostRecent();
        expect(request).toBeDefined();
        expect(request.url).toBe('/rest/exercise51');
    });

    it("should call the predefined callback function", function (done) {
        callback51 = jasmine.createSpy('callback51');

        exercise51();

        setTimeout(function() {
            expect(callback51).toHaveBeenCalled();
            done();
        }, 1000);
    });
});


describe("Exercise 5.2", function () {
    it("should define a function exercise 51", function () {
        expect(exercise52).toBeDefined();
    });

    it("should print out something an empty string", function() {
        spyOn(console, 'log').and.callThrough();

        exercise52([]);

        expect(console.log).toHaveBeenCalledWith('');
    });

    it("should print out the concatenanted string", function() {
        spyOn(console, 'log').and.callThrough();

        exercise52(['bla','bla']);

        expect(console.log).toHaveBeenCalledWith('bla,bla');
    });

    it("should print nothing if there is something else than an array", function() {
        spyOn(console, 'log').and.callThrough();

        exercise52('bla');

        expect(console.log).not.toHaveBeenCalled();
    });
});
