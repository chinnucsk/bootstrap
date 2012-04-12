// Bootstrap controllers and states here

// controllers

// The goal of this section is to bootstrap the people and person controllers
// together with any dependencies that they need. In test mode, these dependencies
// could be replaced with versions that test expectations.
//
// In this case, we want the person and people controllers to have access to the
// main data store, and we want them to have access to each other.
var peopleController = Nikita.peopleController = Nikita.PeopleController.create({
  store: Nikita.store,
  content: Nikita.Person.find()
});

var personController = Nikita.personController = Nikita.PersonController.create({
  store: Nikita.store,
  peopleController: peopleController
});

peopleController.set('personController', personController);

// views
Nikita.PersonEditView.reopen({
  controller: personController
});
Nikita.PersonListView.reopen({
  controller: peopleController
});

var personIndexView = Nikita.PersonIndexView.create({
  controller: peopleController,
  templateName: "nikita/people/index"
});

personIndexView.append();
