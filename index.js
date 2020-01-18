const express = require("express");
const mongoose = require("mongoose"):
const authRoutes = require("./routes/authRoutes");
const { mongoURI } = require("./config/keys");
require("./services/passport");

mongoose.connect(mongoURI);
const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
