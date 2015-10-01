(function (global, jasmine) {
    "use strict";

    describe("Exercise 4: Callbacks, Ajax & Promises", function () {

        function stubCalculationRequest(a, b) {
            var url = '/rest/calculate/' + a + '/plus/' + b;
            var result = (a + b);

            jasmine.Ajax.stubRequest(
                url
            ).andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'text/plain',
                    responseText: "" + result
                });
        }

        beforeEach(function () {
            // reduce timeout to make test suite faster
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 500; //ms
            jasmine.Ajax.install();

            stubCalculationRequest(5, 4);
            stubCalculationRequest(9, 3);
            stubCalculationRequest(12, 2);
            stubCalculationRequest(14, 1);
        });

        afterEach(function () {
            jasmine.Ajax.uninstall();
        });

        describe("Exercise 4.1: Callbacks / Ajax", function () {

            function getCalledUrls() {
                var calledUrls = [];

                for (var i = 0; i < jasmine.Ajax.requests.count(); i++) {
                    calledUrls.push(jasmine.Ajax.requests.at(i).url);
                }

                return calledUrls;
            }

            it("should make the correct rest calls", function (done) {
                global.ex4.exercise41(function () {
                    var calledUrls = getCalledUrls();

                    expect(calledUrls).toContain("/rest/calculate/5/plus/4");
                    expect(calledUrls).toContain("/rest/calculate/9/plus/3");
                    expect(calledUrls).toContain("/rest/calculate/12/plus/2");
                    expect(calledUrls).toContain("/rest/calculate/14/plus/1");

                    done();
                });
            });

            it("should return the correct result", function (done) {
                global.ex4.exercise41(function (result) {
                    expect(result).toBeDefined();
                    expect(result).toMatch(/15/);

                    done();
                });
            });

        });

        describe("Exercise 4.2: Promises", function () {

            beforeEach(function () {
                jasmine.Ajax.stubRequest(
                    '/rest/calculate/undefined/plus/undefined'
                ).andReturn({
                        status: 200,
                        statusText: 'HTTP/1.1 200 OK',
                        contentType: 'text/plain',
                        responseText: 'all good'
                    });
            });

            it("the serverAddPromise function should return a callback", function () {
                var promise = global.ex4.exercise42();

                expect(promise.then).toBeDefined();
                expect(promise.fail).toBeDefined();
            });

            it("the serverAddPromise function should add 5 + 5 and resolve the promise", function (done) {
                stubCalculationRequest(5, 5);

                var promise = global.ex4.exercise42(5, 5);

                promise.then(function (result) {
                    expect(result).toMatch(/10/);
                    done();
                });
            });

            it("the serverAddPromise function can not add 5 + 0 and the promise should then be rejected", function (done) {
                jasmine.Ajax.stubRequest(
                    '/rest/calculate/5/plus/0'
                ).andReturn({
                        status: 500,
                        statusText: 'HTTP/1.1 200 OK',
                        contentType: 'text/plain',
                        responseText: 'oh boy i have no idea how to add 5 and zero'
                    });

                var promise = window.ex4.exercise42(5, 0);

                promise.fail(function () {
                    done();
                });
            });

        });

    });

})(window, window.jasmine);
