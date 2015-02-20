Package.describe({
  name: "naturaily:simple-schema-translations",
  summary: "Translations for aldeed:simple-schema (tap:i18n integration).",
  version: "0.0.1",
  git: " /* Fill me in! */ "
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.0");
  api.use(["underscore", "aldeed:simple-schema@1.3.0", "tap:i18n@1.3.2"]);
  api.addFiles(["ss-translations-helpers.js", "ss-translations.js"], "client");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("naturaily:simple-schema-translations");
  api.addFiles("ss-translations-tests.js", "client");
});
