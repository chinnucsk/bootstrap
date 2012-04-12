var splitView;

describe("Nikita.SplitView", function() {
  beforeEach(function() {
    Ember.run(function() {
      splitView = Nikita.SplitView.create();
      splitView.appendTo("#fixture");
    });
  });

  afterEach(function() {
    if (splitView) { splitView.destroy(); }
  });

  var appendChild = function(position,text) {
    var childView = null;

    if (text !== null) {
      childView = Ember.View.create({
        template: Ember.Handlebars.compile(text)
      });
    }

    Ember.run(function() {
      splitView.set(position + 'View', childView);
    });
  };

  describe("only left view", function() {
    it ("starts out with no leftView", function() {
      expect(splitView.get('leftView')).toBeNull();
      expect(splitView.$().html()).toEqual("");
    });

    it ("renders the left view if it is added as leftView", function() {
      appendChild('left', "Hello lefty");
      expect(splitView.$().text()).toEqual("Hello lefty");
    });

    it ("removes the old left view and appends the new one if leftView is changed", function() {
      appendChild('left', "Hello lefty");
      appendChild('left', "Goodbye lefty");

      expect(splitView.$().text()).toEqual("Goodbye lefty");
    });

    it("removes the old left view and doesn't append a new one when the leftView is set to null", function() {
      appendChild('left', "Hello lefty");
      appendChild('left', null);

      expect(splitView.$().html()).toEqual("");
    });
  });

  describe("only right view", function() {
    it ("starts out with no rightView", function() {
      expect(splitView.get('rightView')).toBeNull();
      expect(splitView.$().html()).toEqual("");
    });

    it ("renders the right view if it is added as rightView", function() {
      appendChild('right', "Hello righty");
      expect(splitView.$().text()).toEqual("Hello righty");
    });

    it ("removes the old right view and appends the new one if rightView is changed", function() {
      appendChild('right', "Hello righty");
      appendChild('right', "Goodbye righty");

      expect(splitView.$().text()).toEqual("Goodbye righty");
    });

    it("removes the old right view and doesn't append a new one when the rightView is set to null", function() {
      appendChild('right', "Hello righty");
      appendChild('right', null);

      expect(splitView.$().html()).toEqual("");
    });
  });

  describe("both left and right view", function() {
    beforeEach(function() {
      appendChild('left', "Hello lefty");
      appendChild('right', "Hello righty");
    });

    it ("renders both the left and right view", function() {
      expect(splitView.$().text()).toEqual("Hello leftyHello righty");
    });


    it ("replaces only the old view if they are changed", function() {
      appendChild('left', "Goodbye lefty");
      appendChild('right', "Goodbye righty");

      expect(splitView.$().text()).toEqual("Goodbye leftyGoodbye righty");
    });
  });
});

