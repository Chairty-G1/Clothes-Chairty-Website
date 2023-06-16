const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const adminRouts = require('./routes/adminRouter');
const logInRouts = require('./routes/logInRouter');

const dbURI = "mongodb+srv://Omarps:M1QDl3ps4uDiujPh@cluster0.0shgatw.mongodb.net/database"


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the API!"); 
});

app.use(adminRouts);
app.use(logInRouts);

module.exports = {
  server: app,
  start: () => {
    mongoose
      .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        app.listen(PORT, () => {
          console.log(`Starting server on port ${PORT}`);
        });
      });
  },
};
