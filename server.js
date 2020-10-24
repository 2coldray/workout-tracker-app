//Require Packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Establish Ports
const PORT = process.env.PORT || 3000;

//Require Controllers
const workoutController = require("./controllers/workoutController");

//Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Mongoose Connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  );
  
  const connection = mongoose.connection;
  
  connection.on("connected", () => {
    console.log("Mongoose successfully connected.");
  });
  
  connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
  });

//API Config - check if it works
app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });

//Use Controllers
app.use(workoutController);

//Use Html Routes
require("./routes/html-routes")(app);

//Listen to Port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});