import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";
import fs from "fs";
const { beforeRunHook } = require("cypress-mochawesome-reporter/lib");

export default defineConfig({
  e2e: {
    //By default this is true
    watchForFileChanges: false,
    //By default this is 4000
    defaultCommandTimeout: 10000,
    //By default this is true, Cypress will record a video of the test run when running headlessly.
    video: true,
    // Resize the viewport to 1280px x 768px
    viewportWidth: 1280,
    viewportHeight: 768,
    baseUrl: "https://test.yssofindia.org/",
    chromeWebSecurity: false,
    // reporter: 'cypress-mochawesome-reporter',
    // reporterOptions: {
    //   charts: true,
    //   reportPageTitle: 'PY - Mochawesome Test Reports',
    //   embeddedScreenshots: true,
    //   inlineAssets: true,
    // },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const environmentName = config.env.environmentName || "staging";
      const environmentFilename = `./env/${environmentName}.settings.json`;
      console.warn("loading %s", environmentFilename);
      const settings = require(environmentFilename);
      if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
      }
      if (settings.env) {
        config.env = {
          ...config.env,
          ...settings.env,
        };
      }
      console.log("loaded settings for environment %s", environmentName);

      // IMPORTANT: return the updated config object
      // for Cypress to use it
      allureWriter(on, config);
      on("before:run", async (details) => {
        await beforeRunHook(details);
      });
      on("after:run", (results) => {
        const data = `Environment=${environmentName}\nBaseURL=${settings.baseUrl}\n`;
        fs.writeFile("allure-results/environment.properties", data, (err) => {
          if (err) throw err;
        });
      });
      // require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
