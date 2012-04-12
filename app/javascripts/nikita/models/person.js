Nikita.Person = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string')
});

Nikita.Person.FIXTURES = [
  {
    id: 1,
    name: "Brian Ford",
    description: "Rubinius Extraordinaire"
  }
];
