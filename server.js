//Require Packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Establish Ports
const PORT = process.env.PORT || 3000;


//Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});


//Use Controllers
app.use(require("./routes/workout-routes"));
app.use(require("./routes/html-routes"));

//Listen to Port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
