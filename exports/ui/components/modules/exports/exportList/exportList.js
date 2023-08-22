import { Template } from "meteor/templating";
import "./exportList.html";
import "../exportItem/exportItem.html";

Template.exportList.helpers({
  exports: [
    { export: "Export 1" },
    { export: "Export 2" },
    { export: "Export 3" },
  ],
});
