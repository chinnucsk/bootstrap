Nikita.PeopleController = Ember.ArrayController.extend({
  currentView: function() {
    if (this.get('isEditing')) {
      return Nikita.PersonEditView.create();
    } else {
      return Nikita.PersonListView.create();
    }
  }.property('isEditing').cacheable(),

  create: function() {
    this.set('isEditing', true);
    this.get('personController').create();
  }
});
