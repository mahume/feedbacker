const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
});

// Load Schema
mongoose.model("users", userSchema);
