/**
 * JavaScript Basics Workshop - Exercise 4
 * Callbacks, Ajax & Promises
 */

(function (window, $) {
    "use strict";

    function exercise41(callback) {
        $.get("/rest/devices", function(devices) {
            for (var i = 0; i < devices.length; i++) {
                $.get("/rest/device/" + devices[i].id, function (result) {
                    callback(result);
                });
            }
        });
    }

    function exercise42(callback) {
        $.get("/rest/devices")
            .then(function (devices) {
                var promises = [];

                for (var i = 0; i < devices.length; i++) {
                    promises.push($.get("/rest/device/" + devices[i].id));
                }

                var defer = $.Deferred();

                $.when(promises).done(function (results) {
                    defer.resolve(results[0].responseJSON);
                });

                return defer;
            })
            .then(function (device) {
                callback(device);
            });
    }


    // Exercise 4.3 (optional)

    // TODO Exercise 4.3.1 Code exercise 4.2 once again, this time using the basic XMLHttpRequest() object of
    //                     javascript instead of the jquery abstraction.
    //                     See https://developer.mozilla.org/de/docs/Web/API/XMLHttpRequest for more information
    function exercise43() {

    }

    window.ex4 = window.ex4 || {};
    window.ex4.exercise41 = window.ex4.exercise41 || exercise41;
    window.ex4.exercise42 = window.ex4.exercise42 || serverAddPromise;
    window.ex4.exercise43 = window.ex4.exercise43 || exercise43;
})(window, jQuery);