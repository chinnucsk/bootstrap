require("vendor/jquery");
require("vendor/ember");
require("vendor/ember-data");

window.Nikita = Ember.Application.create({
  store: DS.Store.create({
    revision: 4,
    adapter: DS.fixtureAdapter
  })
});

// Automatically load any Handlebars templates.
var modules = minispade.modules;
for (var module in modules) {
  if (!modules.hasOwnProperty(module)) { continue; }
  if (module.match(/\.handlebars/)) { minispade.require(module); }
}

require("nikita/models");
require("nikita/views");
require("nikita/controllers");

// Don't load the bootstrap in unit testing mode
if (!window.ENV || !ENV.UNIT_TESTING) {
  require("nikita/bootstrap");
}
