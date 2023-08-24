import { EXPORT_STATUS } from "./constants";
import { ExportsCollection } from "../../db/exports";
import { getRandomLink } from "./utils/getRandomLink";

Meteor.methods({
  "export.start"() {
    //this.unblock();

    // Save the export in the DB
    const newExport = ExportsCollection.insert({
      startedAt: new Date(),
      status: EXPORT_STATUS.IN_PROGRESS,
    });

    let progress = 0;

    const interval = Meteor.setInterval(() => {
      // Increment to 5 each seconds
      progress += 5;

      ExportsCollection.update(newExport, {
        $set: {
          progress,
        },
      });

      if (progress === 100) {
        Meteor.clearInterval(interval);

        ExportsCollection.update(newExport, {
          $set: {
            status: EXPORT_STATUS.SUCCEEDED,
            link: getRandomLink(),
          },
        });
      }
    }, 1000);
  },
});
