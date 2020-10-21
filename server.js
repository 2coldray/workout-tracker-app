//Require Packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//Establish Ports
const PORT = process.env.PORT || 3000;

//Require Controllers


//Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Mongoose Connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout-tracker",
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


//Listen to Port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});