/**
 * JavaScript Basics Workshop - Exercise 4
 * Callbacks, Ajax & Promises
 */

(function (window, $) {
    "use strict";

    // Exercise 4.1
    // You got the task to get all devices with an ajax call to a rest service, get another call to get the
    // device info.
    function exercise41(callback) {
        // TODO 4.1.1 - Wipe all the devices
        //              NOTE Use jQuery to call the service
        //              NOTE Do not use jQuery promises, work with callbacks instead. Use the shorthandler $.get
        //              NOTE You will get a list of devices via GET /rest/devices,
        //              NOTE The list only contains one device (bad api design ;( ). You can get more information about
        //                   devices under GET /rest/device/[device.id]. Pass the result of this call to the callback.

        // YOUR CODE GOES HERE
    }

    // Exercise 4.2
    // It already gets a bit messy.. Time to try promises.
    function exercise42(callback) {
        // TODO 4.2.1 - Use jQuery Promises to solve the problem from Exercise 4.1
        //              NOTE check out https://api.jquery.com/jquery.get/ and
        //                   https://api.jquery.com/category/deferred-object/
        //              NOTE you can handle multiple promises with https://api.jquery.com/jQuery.when/

        // YOUR CODE GOES HERE
    }


    // Exercise 4.3 (optional)
    // TODO Exercise 4.3.1 Code exercise 4.1 once again, this time using the basic XMLHttpRequest() object of
    //                     javascript instead of the jquery abstraction.
    //                     See https://developer.mozilla.org/de/docs/Web/API/XMLHttpRequest for more information
    function exercise43(callback) {
        // YOUR CODE GOES HERE
    }

    window.ex4 = window.ex4 || {};
    window.ex4.exercise41 = window.ex4.exercise41 || exercise41;
    window.ex4.exercise42 = window.ex4.exercise42 || exercise42;
    window.ex4.exercise43 = window.ex4.exercise43 || exercise43;
})(window, jQuery);