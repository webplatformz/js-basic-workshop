"use strict";

(function() {
  window.bindIt = function(fToBind, context) {
    return fToBind.bind(context);
  }

  window.createIt = function(prototype) {
    var Constructor = function Constructor(name) {
      this.name = name;
    }
    Constructor.prototype = prototype;

    return Constructor;
  }
  
  window.fakeBind = function fakeBind(fToBind, context) {
    var fBound = function() {
      fToBind.call(context);
    };

    fBound.prototype = fToBind.prototype;

    return fBound;
  }

  window.fakeObjectCreate = function fakeObjectCreate(context) {
    var fNOP = function() {};
    fNOP.prototype = context;

    return new fNOP();
  }
})();
