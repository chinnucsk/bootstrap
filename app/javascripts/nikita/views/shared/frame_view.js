Nikita.FrameView = Ember.ContainerView.extend({
  currentView: null,

  currentViewDidChange: function() {
    var childViews = this.get('childViews'),
        currentView = this.get('currentView');

    childViews.popObject();

    if (currentView) {
      childViews.pushObject(currentView);
    }
  }.observes('currentView')
});

