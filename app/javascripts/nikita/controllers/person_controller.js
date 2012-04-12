Nikita.PersonController = Ember.Object.extend({
  content: null,

  create: function() {
    var transaction = Nikita.store.transaction();
    var course = transaction.createRecord(Nikita.Person);

    this.set('content', course);
    this.set('transaction', transaction);
  },

  save: function() {
    var transaction = this.get('transaction');

    // comment out until the FixtureAdapter supports saving
    // transaction.commit();

    this.setPath('peopleController.isEditing', false);
  }
});
