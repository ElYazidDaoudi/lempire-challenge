import { Template } from "meteor/templating";
import "./exportList.html";
import "../exportItem/exportItem.html";

const Status = {
  SUCCEEDED: "SUCCEEDED",
  FAILED: "FAILED",
};

Template.exportList.helpers({
  exports: [
    {
      item: {
        name: "Export 1",
        startedAt: new Date(),
        status: Status.SUCCEEDED,
      },
    },
    {
      item: {
        name: "Export 2",
        startedAt: new Date(),
        status: Status.FAILED,
      },
    },
    {
      item: {
        name: "Export 3",
        startedAt: new Date(),
        status: Status.SUCCEEDED,
      },
    },
  ],
  formatItem(item) {
    return `Export_${item.item.name}_${new Date(
      item.item.startedAt
    ).getTime()} ${item.item.status}`;
  },
});
