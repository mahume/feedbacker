const passport = require("passport");

module.exports = app => {
  // Test route for OAuth
  // Initial route to hit
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );
  // Callback URL Route with code
  app.get("/auth/google/callback", passport.authenticate("google"));
};