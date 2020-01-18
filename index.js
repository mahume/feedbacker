const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const { mongoURI } = require("./config/keys");
require("./services/passport");

// DB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Express instance
const app = express();

// Use Auth routes
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
