Meteor.startup(function () {
  TAPi18next.init({
    objectTreeKeyHandler: function (key, value) {
      return value;
    }
  });

  Tracker.autorun(function () {
    translateErrorMessages(TAPi18n.__("simpleSchema.errors"));
    translateLabels(TAPi18n.__("simpleSchema.labels"));
  });
});
