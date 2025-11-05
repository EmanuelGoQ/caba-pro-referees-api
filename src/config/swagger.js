const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Árbitros",
      version: "1.0.0",
      description: "API NodeJS que consume SpringBoot (solo árbitros) — Documentación Swagger"
    },
    servers: [{ url: "http://localhost:3000" }]
  },
  apis: ["./src/routes/*.js"]
};

module.exports = swaggerJSDoc(options);
