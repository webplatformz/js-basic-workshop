"use strict";

(function(global) {
  global.bindIt = function(fToBind, context) {
    return fToBind.bind(context);
  }

  global.createIt = function(prototype) {
    var Constructor = function Constructor(name) {
      this.name = name;
    }
    Constructor.prototype = prototype;

    return Constructor;
  }

  global.myBind = function myBind(fToBind, context) {
    var fBound = function() {
      fToBind.call(context);
    };

    fBound.prototype = fToBind.prototype;

    return fBound;
  }

  global.myObjectCreate = function myObjectCreate(context) {
    var fNOP = function() {};
    fNOP.prototype = context;

    return new fNOP();
  }
})(window);
