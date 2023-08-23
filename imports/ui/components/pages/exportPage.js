import "./exportPage.html";

Template.ExportPage.events({
  "click .button"() {
    Meteor.call("export.insert");
  },
});
