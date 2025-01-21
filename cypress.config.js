const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    video: true,
    setupNodeEvents(on, config) {
      // Use este espaço para configurar plugins, se necessário
    },
  },
});
