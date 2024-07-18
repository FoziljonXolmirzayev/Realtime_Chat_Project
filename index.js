const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const messageRoute = require("./routes/message");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("./constants/swagger");
const chatRoute = require("./routes/chat");

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());
app.use("/chat", chatRoute);
app.use("/auth", authRoute);
app.use("/messages", messageRoute);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`mongodb connected`);
  })
  .catch(console.log);
