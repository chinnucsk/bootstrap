console.log("loading spec helper");

jQuery(function($) {
  $("body").append("<div id='fixture'>");
});

afterEach(function() {
  jQuery("#fixture").empty();
});
