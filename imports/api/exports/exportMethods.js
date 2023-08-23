import { EXPORT_STATUS } from "./constants";
import { ExportsCollection } from "../../db/exports";

Meteor.methods({
  "export.insert"() {
    ExportsCollection.insert({
      startedAt: new Date(),
      status: EXPORT_STATUS.IN_PROGRESS,
    });
  },
});
