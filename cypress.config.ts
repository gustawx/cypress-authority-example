import { defineConfig } from "cypress";

const config: Cypress.ConfigOptions<any> = {
  e2e: {
    baseUrl: "https://version.authority.builders/apply",
    userAgent: "E2E TESTS",
    requestTimeout: 90000,
    responseTimeout: 90000,
    defaultCommandTimeout: 90000,
    pageLoadTimeout: 120000,
    screenshotsFolder: "mochawesome-report",
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
      overwrite: false,
      html: true,
      json: true,
      timestamp: true,
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    includeShadowDom: true,
    chromeWebSecurity: false
  },
};

export default defineConfig(config);
