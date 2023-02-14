const { defineConfig } = require("cypress");
const { reporters } = require("mocha");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    JSON: true,
    reportDir: "cypress/reports",
    // mochaFile: 'results/my-test-output.xml',
    // toConsole: true
  }
});

