import "./App.html";
import "../startup/client";

import { Template } from "meteor/templating";

Template.importList.helpers({
  imports: [
    { import: "Import 1" },
    { import: "Import 1" },
    { import: "Import 1" },
  ],
});
