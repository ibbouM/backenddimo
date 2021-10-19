const express = require("express");
const mongoose = require("mongoose");

const diagnosticRouter = require("./routers/routes");

require("dotenv").config();

const optionsMongoose = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.CONNECTION_URI, optionsMongoose)
  .then(() => {
    console.log("connexion reussi");
  })
  .catch((error) => {
    console.log("connexion echoué", error);
  });

// Initialisation des variables
const port = process.env.PORT || 8080;

const app = express();

//Définition des middleware
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader("Cross-origin-Embedder-Policy", "require-corp");
  res.setHeader("Cross-origin-Opener-Policy", "same-origin");

  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(diagnosticRouter);

app.listen(port, () => {});
