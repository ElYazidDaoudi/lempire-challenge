import { Template } from "meteor/templating";
import "./importList.html";
import "../importItem/importItem.html";

Template.importList.helpers({
  imports: [
    { import: "Import 1" },
    { import: "Import 1" },
    { import: "Import 1" },
  ],
});
