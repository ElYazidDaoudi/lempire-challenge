import { Meteor } from "meteor/meteor";
import { ExportsCollection } from "../../db/exports";

Meteor.publish("exports", function publishExports() {
  return ExportsCollection.find();
});
