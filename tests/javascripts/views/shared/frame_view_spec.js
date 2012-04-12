var frameView;

describe("Nikita.FrameView", function() {
  beforeEach(function() {
    Ember.run(function() {
      frameView = Nikita.FrameView.create();
      frameView.appendTo("#fixture");
    });
  });

  afterEach(function() {
    if (frameView) { frameView.destroy(); }
  });

  var appendChild = function(text) {
    var childView = null;

    if (text !== null) {
      childView = Ember.View.create({
        template: Ember.Handlebars.compile(text)
      });
    }

    Ember.run(function() {
      frameView.set('currentView', childView);
    });
  };

  it ("starts out with no currentView", function() {
    expect(frameView.get('currentView')).toBeNull();
    expect(frameView.$().html()).toEqual("");
  });

  it ("renders the child view if it is added as currentView", function() {
    appendChild("Hello world");
    expect(frameView.$().text()).toEqual("Hello world");
  });

  it ("removes the old child view and appends the new one if currentView is changed", function() {
    appendChild("Hello world");
    appendChild("Goodbye world");

    expect(frameView.$().text()).toEqual("Goodbye world");
  });

  it ("removes the old child view and doesn't append the new one if currentView is null", function() {
    appendChild("Hello world");
    appendChild(null);

    expect(frameView.$().html()).toEqual("");
  });
});
