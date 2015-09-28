"use strict";

(function() {
  window.fakeBind = function fakeBind(fToBind, context) {
    var fBound = function() {
      fToBind.call(context);
    };

    fBound.prototype = fToBind.prototype;

    return fBound;
  }

  window.fakeObjectCreate = function fakeObjectCreate(context) {
  }
})();
