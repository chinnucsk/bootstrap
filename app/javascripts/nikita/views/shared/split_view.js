Nikita.SplitView = Ember.ContainerView.extend({
  leftView: null,
  rightView: null,

  leftViewWillChange: function() {
    var childViews = this.get('childViews'),
        leftView = this.get('leftView');

    childViews.removeObject(leftView);
  }.observesBefore('leftView'),

  leftViewDidChange: function() {
    var childViews = this.get('childViews'),
        leftView = this.get('leftView');

    if (!leftView) { return; }

    childViews.unshiftObject(leftView);
  }.observes('leftView'),

  rightViewWillChange: function() {
    var childViews = this.get('childViews'),
        rightView = this.get('rightView');

    childViews.removeObject(rightView);
  }.observesBefore('rightView'),

  rightViewDidChange: function() {
    var childViews = this.get('childViews'),
        rightView = this.get('rightView');

    if (!rightView) { return; }

    childViews.pushObject(rightView);
  }.observes('rightView')
});


