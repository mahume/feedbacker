const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const authRoutes = require("./routes/authRoutes");
const { mongoURI, cookieKey } = require("./config/keys");
require("./models/User");
require("./services/passport");

// DB Connection
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create Express instance
const app = express();

// Enable cookies within app
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey],
  })
);
// Enable Passport to use cookies for OAuth
app.use(passport.initialize());
app.use(passport.session());

// Use Auth routes
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
