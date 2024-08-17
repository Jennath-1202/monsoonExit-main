const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://localhost:27017/blogApp", // Replace with your MongoDB connection string
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });

