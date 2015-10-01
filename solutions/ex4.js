/**
 * JavaScript Basics Workshop - Exercise 4
 * Callbacks, Ajax & Promises
 */

// Welcome Coder! You are doing very well so far!
// There is a very very advanced rest service you should use for the next exercises:
// The service is available via GET under /rest/calculate/A/plus/B where A and B are integers.
// e.g. GET /rest/calculate/5/plus/5 => 10

(function (window, $, Q) {
    "use strict";

    // Exercise 4.1
    // You got the task to calculate the amount of connections between all teammembers of the yankee team. For
    // these six people, the number is calculated like this: 5 + 4 + 3 + 2 + 1. <justkidding>As this calculation
    // needs lot of resources on the client side</justkidding>, the calculation has to be done on the server with
    // the high performance webservice mentioned above.
    function exercise41(callback) {
        // TODO 4.1.1 - Use the api to calculate the result
        //              NOTE Use jQuery to call the service and get the result of 5+4, then take the result
        //                   (in the first case 9) and add 3, and so on ...
        //              NOTE Do not use jQuery promises, work with callbacks instead.
        //              NOTE The callback should be called with the correct answer as the first parameter

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

    // Exercise 4.2
    // What a callback hell. We should improve this code. Use the "q" library which is already included
    // and loaded to create your first promise!

    // TODO 4.2.1: Create a function called serverAddPromise
    // TODO 4.2.2: The function serverAddPromise should return a promise using the Q library, so it returns the correct interface for a promise.
    //             see Q.defer() and check out https://github.com/kriskowal/q
    // TODO 4.2.3: Enhance the newly created function with two summands as parameters a and b. Sum a + b on the GET
    //             route "/rest/calculate/[A]/plus/[B]". This time, use the jQuery promise syntax and let your own
    //             promise resolve
    // TODO 4.2.4: Let the promise fail, if there is no correct answer from the server
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

    // Exercise 4.3 (optional)
    // Congrats, your promise seems promising. Now it is time to use it.

    // TODO 4.3.1 Use the serverAddPromise function to calculate 5 + 4 + 3 + 2 + 1.
    //            Do not use Q.all, instead calculate the value in such steps: 5+4, (5+4)+3, ...

    function exercise43() {
        return serverAddPromise(5, 4)
            .then(function (result) {
                return serverAddPromise(result, 3);
            }).then(function (result) {
                return serverAddPromise(result, 2);
            }).then(function (result) {
                return serverAddPromise(result, 1);
            });
    }

    // Exercise 4.4 (optional)

    // TODO Exercise 4.4.1 Code exercise 4.2 once again, this time using the basic XMLHttpRequest() object of
    //                     javascript instead of the jquery abstraction.
    //                     See https://developer.mozilla.org/de/docs/Web/API/XMLHttpRequest for more information

    window.ex4 = window.ex4 || {};
    window.ex4.exercise41 = window.ex4.exercise41 || exercise41;
    window.ex4.exercise42 = window.ex4.exercise42 || serverAddPromise;
    window.ex4.exercise43 = window.ex4.exercise43 || exercise43;
})(window, jQuery, Q);