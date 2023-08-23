import "./exportItem.html";
import "./exportItem.css";

Template.ExportItem.helpers({
  formatItem() {
    return this.item.status === "SUCCEEDED"
      ? `<a href=${this.item.link}> ${this.item.link}</a>`
      : `Export_${new Date(this.item.startedAt).getTime()}`;
  },
  inc() {
    return this.item.progress || 0;
  },
  itemIsLoading() {
    return this.item && this.item.status === "IN_PROGRESS";
  },
});
