(function (global, jasmine) {
    "use strict";

    describe("Exercise 4: Callbacks, Ajax & Promises", function () {
        beforeEach(function () {
            // reduce timeout to make test suite faster
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 500; //ms
            jasmine.Ajax.install();
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

        describe("Exercise 4.1: Callbacks / Ajax", function () {
            beforeEach(function () {
                jasmine.Ajax.stubRequest("/rest/devices").andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'application/json',
                    responseText: '[{"id": 12}]'
                });
                jasmine.Ajax.stubRequest("/rest/device/12").andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'application/json',
                    responseText: '{"status": true}'
                });
            });

            it("should make the correct rest calls", function (done) {
                global.ex4.exercise41(function (result) {
                    var calledUrls = getCalledUrls();

                    expect(calledUrls).toContain("/rest/devices");
                    expect(calledUrls).toContain("/rest/device/12");

                    done();
                });
            });

            it("should return the correct result", function (done) {
                global.ex4.exercise41(function (result) {
                    expect(result.status).toBe(true);
                    done();
                });
            });
        });

        describe("Exercise 4.2: Promises", function () {
            beforeEach(function () {
                jasmine.Ajax.stubRequest("/rest/devices").andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'application/json',
                    responseText: '[{"id": 12}]'
                });
                jasmine.Ajax.stubRequest("/rest/device/12").andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'application/json',
                    responseText: '{"status": true}'
                });
            });

            it("should make the correct rest calls", function (done) {
                global.ex4.exercise42(function (result) {
                    var calledUrls = getCalledUrls();

                    expect(calledUrls).toContain("/rest/devices");
                    expect(calledUrls).toContain("/rest/device/12");

                    done();
                });
            });

            it("should return the correct result", function (done) {
                global.ex4.exercise42(function (result) {
                    expect(result.status).toBe(true);
                    done();
                });
            });
        });

        describe("Exercise 4.3: XMLHttpRequest", function () {
            beforeEach(function () {
                jasmine.Ajax.stubRequest("/rest/devices").andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'application/json',
                    responseText: '[{"id": 12}]'
                });
                jasmine.Ajax.stubRequest("/rest/device/12").andReturn({
                    status: 200,
                    statusText: 'HTTP/1.1 200 OK',
                    contentType: 'application/json',
                    responseText: '{"status": true}'
                });
            });

            it("should make the correct rest calls", function (done) {
                global.ex4.exercise43(function (result) {
                    var calledUrls = getCalledUrls();

                    expect(calledUrls).toContain("/rest/devices");
                    expect(calledUrls).toContain("/rest/device/12");

                    done();
                });
            });

            it("should return the correct result", function (done) {
                global.ex4.exercise43(function (result) {
                    expect(result.status).toBe(true);
                    done();
                });
            });
        });
    });

})(window, window.jasmine);
