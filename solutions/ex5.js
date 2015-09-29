"use strict";

(function (window) {
    function exercise51(callback) {
        $.get("/rest/calculate/5/plus/4", function (result) {
            $.get("/rest/calculate/" + result + "/plus/3", function (result) {
                $.get("/rest/calculate/" + result + "/plus/2", function (result) {
                    $.get("/rest/calculate/" + result + "/plus/1", function (result) {
                        callback(result);
                    });
                });
            });
        });
    }

    function serverAddPromise(a, b) {
        var deferred = Q.defer();
        var url = "/rest/calculate/" + a + "/plus/" + b;

        $.get(url)
            .done(function (data) {
                deferred.resolve(data);
            })
            .fail(function () {
                deferred.reject();
            });

        return deferred.promise;
    }

    function exercise53() {
        return serverAddPromise(5, 4)
            .then(function (result) {
                return serverAddPromise(result, 3);
            }).then(function (result) {
                return serverAddPromise(result, 2);
            }).then(function (result) {
                return serverAddPromise(result, 1);
            });
    }

    window.exercise51 = exercise51;
    window.exercise52 = serverAddPromise;
    window.exercise53 = exercise53;
})(window);