const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://br.yahoo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
