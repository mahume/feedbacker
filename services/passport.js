const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const { googleClientID, googleClientSecret } = require("../config/keys");

// Fetch Schema
const User = mongoose.model("users");

// Get Mongoose Model's _id from Mongo
passport.serializeUser((user, done) => done(null, user.id));

// Convert ID to Mongoose Model's _id
passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

// New instance of Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        new User({ googleId: profile.id }).save().then(user => done(null, user));
      }
    }
  )
);
