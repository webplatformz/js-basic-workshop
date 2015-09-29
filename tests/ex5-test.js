(function (jasmine) {
    "use strict";

    describe("CALLBACKS / PROMISES", function () {
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
            jasmine.Ajax.install();

            stubCalculationRequest(5, 4);
            stubCalculationRequest(9, 3);
            stubCalculationRequest(12, 2);
            stubCalculationRequest(14, 1);
        });

        afterEach(function () {
            jasmine.Ajax.uninstall();
        });

        function getCalledUrls() {
            var calledUrls = [];

            for (var i = 0; i < jasmine.Ajax.requests.count(); i++) {
                calledUrls.push(jasmine.Ajax.requests.at(i).url);
            }

            return calledUrls;
        }

        describe("CALLBACKS / AJAX: Exercise 5.1", function () {
            it("should make the correct rest calls", function (done) {
                window.ex5.exercise51(function () {
                    var calledUrls = getCalledUrls();

                    expect(calledUrls).toContain("/rest/calculate/5/plus/4");
                    expect(calledUrls).toContain("/rest/calculate/9/plus/3");
                    expect(calledUrls).toContain("/rest/calculate/12/plus/2");
                    expect(calledUrls).toContain("/rest/calculate/14/plus/1");

                    done();
                });
            });

            it("should return the correct result", function (done) {
                window.ex5.exercise51(function (result) {
                    expect(result).toBeDefined();
                    expect(result).toMatch(/15/);

                    done();
                });
            });
        });

        describe("PROMISES: Exercise 5.2", function () {
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

            it("the function serverAddPromise should be defined (5.2.1)", function () {
                expect(window.ex5.exercise52).toBeDefined();
            });

            it("the serverAddPromise function should return a callback (5.2.2)", function () {
                var promise = window.ex5.exercise52();

                expect(promise.then).toBeDefined();
                expect(promise.fail).toBeDefined();
            });

            it("the serverAddPromise function should add 5 + 5 and resolve the promise (5.2.3)", function (done) {
                stubCalculationRequest(5, 5);

                var promise = window.ex5.exercise52(5, 5);

                promise.then(function (result) {
                    expect(result).toMatch(/10/);
                    done();
                });
            });

            it("the serverAddPromise function can not add 5 + 0 and the promise should then be rejected (5.2.4)", function (done) {
                jasmine.Ajax.stubRequest(
                    '/rest/calculate/5/plus/0'
                ).andReturn({
                        status: 500,
                        statusText: 'HTTP/1.1 200 OK',
                        contentType: 'text/plain',
                        responseText: 'oh boy i have no idea how to add 5 and zero'
                    });

                var promise = window.ex5.exercise52(5, 0);

                promise.fail(function () {
                    done();
                });
            });

        });
    });

    xdescribe("PROMISES / EXCEPTIONS", function () {
        it("it is all bout the exception", function (done) {
            console.log("starting execution");
            Q.fcall(function () {
                return 10;
            }).then(function (value) {
                console.log("then");
                throw new Error("bla");
            }).fail(function () {
                console.log("fail");
                done();
            });
        })
    });
})(window.jasmine);
