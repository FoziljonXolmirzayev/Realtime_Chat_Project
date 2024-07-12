const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const usersRoute = require("./routes/user");

const app = express();
const PORT = 9000;

app.use(cors());
app.use(express.json());
app.use("/user", usersRoute);

mongoose
  .connect("mongodb://localhost:27017/real_chat")
  .then(() => {
    app.listen(PORT);
    console.log(`Server started on port ${PORT}`);
  })
  .catch(console.log);
