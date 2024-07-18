const swaggerJsDocs = require("swagger-jsdoc");

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API for our Chat App !",
      version: "1.0.0",
      description: "Good luck ReactJS developers 😁",
    },
  },
  apis: ["./swagger/*.js"],
};

const swaggerDocs = swaggerJsDocs(swaggerOptions);

module.exports = swaggerDocs;
