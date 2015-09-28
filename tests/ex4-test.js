"use strict";

describe("Exercise 4.1: Implement bind", function () {

  var callback41, context;

  beforeEach(function() {
    callback41 = jasmine.createSpy(),
    context = { data: "I AM A SECOND TEAPOT"}
  });

  var UnboundObject = function() {
    this.data = "I AM A TEAPOT";
  }
  UnboundObject.prototype.myFunction =  function() {
    callback41(this);
  }
  UnboundObject.prototype.myFunction.prototype.prototypeData = "I AM A PROTOTYPE TEAPOT";

    it("calls the given function", function() {
      var testData = new UnboundObject();
      var boundFunction = fakeBind(testData.myFunction, context);
      boundFunction();

      expect(callback41).toHaveBeenCalled();
    });

    it("calls the function with the given environment", function() {
      var testData = new UnboundObject();
      var boundFunction = fakeBind(testData.myFunction, context);
      boundFunction();

      expect(callback41).toHaveBeenCalledWith(context);
    });

    it("cannot overwrite the environment with call", function() {
      var testData = new UnboundObject();
      var boundFunction = fakeBind(testData.myFunction, context);
      boundFunction.call({data: "OTHER TEAPOTS"});

      expect(callback41).toHaveBeenCalledWith(context);
    });

    it("passes on the prototype", function() {
      var testData = new UnboundObject();
      var boundFunction = fakeBind(testData.myFunction, context);
      console.log("proto is", boundFunction.prototype);
      boundFunction.call({data: "OTHER TEAPOTS"});

      expect(boundFunction.prototype.prototypeData).toMatch(/I AM A PROTOTYPE TEAPOT/);
    });
});

describe("Exercise 4.2: Implement Object.create", function() {

});
