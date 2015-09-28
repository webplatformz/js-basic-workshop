"use strict";

describe("Exercise 4.1: Bind", function () {
    var bindFunction = function() {
      return this.data;
    }

  it("calls a function with bind", function () {
    var result = window.bindIt(bindFunction, {data: "I AM ANOTHER TEAPOT"});

    expect(result()).toMatch(/I AM ANOTHER TEAPOT/);
  });

  it("binds the function to the context", function() {
      var result = window.bindIt(bindFunction, {data: "I AM ANOTHER TEAPOT"});

      expect(result.apply({data: "I AM THE THIRD TEAPOT"})).toMatch(/I AM ANOTHER TEAPOT/);
  });
});

describe("Exercise 4.2: Constructors", function() {
  it("creates a constructor that has a name property", function() {
    var Constructor = window.createIt();
    var result = new Constructor("THE TEAPOT");

    expect(result).toBeDefined();
  });

  it("creates a constructor with a name property", function() {
    var Constructor = window.createIt();
    var result = new Constructor("THE TEAPOT");

    expect(result.name).toMatch(/THE TEAPOT/);
  });

  it("sets the prototype to the given object", function() {
    var Constructor = window.createIt({ getFancyName: function() {
      return "The Great " + this.name;
    }});
    var result = new Constructor("Teapot");
    expect(result.getFancyName()).toMatch(/The Great Teapot/);
  })
})

describe("Optional Exercise 4.3: Implement bind", function () {

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

describe("Optional Exercise 4.4: Implement Object.create", function() {
      var prototypeObject;

      beforeEach(function() {
        prototypeObject = {canary: "I AM A TEAPOT"};
      });

      it("returns a new object", function() {
        var object = fakeObjectCreate({});

        expect(object).toBeDefined();
      });

      it("adds the properties of the given context to the object", function() {
        var object = fakeObjectCreate(prototypeObject);

        expect(object.canary).toMatch(/I AM A TEAPOT/);
      });

      it("adds the properties as the property object", function() {
        var object = fakeObjectCreate(prototypeObject);
        object.canary = "I AM ANOTHER TEAPOT";

        expect(prototypeObject.canary).toMatch(/I AM A TEAPOT/);
      });
});
