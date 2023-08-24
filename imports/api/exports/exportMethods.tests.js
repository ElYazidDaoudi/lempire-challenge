import { Meteor } from "meteor/meteor";
import { assert } from "chai";
import { ExportsCollection } from "/imports/db/exports";
import { mockMethodCall } from "meteor/quave:testing";
import { EXPORT_STATUS } from "./constants";

if (Meteor.isServer) {
  describe("Tasks", () => {
    describe("methods", () => {
      beforeEach(() => {
        ExportsCollection.remove({});
      });
      it("should create new export", () => {
        mockMethodCall("export.start");
        assert.equal(ExportsCollection.find().count(), 1);
      });
      it("should have a IN_PROGRESS status", () => {
        mockMethodCall("export.start");
        assert.equal(
          ExportsCollection.find().fetch()[0].status,
          EXPORT_STATUS.IN_PROGRESS
        );
      });
    });
  });
}
