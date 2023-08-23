import { Template } from "meteor/templating";
import { Meteor } from "meteor/meteor";
import "./exportList.html";
import "../exportItem/exportItem.html";
import { ExportsCollection } from "/imports/db/exports";
import "./exportList.css";

const IS_LOADING = "isLoading";

Template.ExportList.onCreated(function exportListOnCreated() {
  this.state = new ReactiveDict();

  const handler = Meteor.subscribe("exports");
  Tracker.autorun(() => {
    this.state.set(IS_LOADING, !handler.ready());
  });
});

Template.ExportList.helpers({
  exports() {
    return ExportsCollection.find({});
  },
  isLoading() {
    const instance = Template.instance();
    return instance.state.get(IS_LOADING);
  },
});

Template.ExportList.events({
  "click .button"() {
    Meteor.call("export.start");
  },
});
