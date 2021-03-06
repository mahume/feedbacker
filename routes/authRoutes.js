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
  app.get("/auth/google/callback", passport.authenticate("google"), (req, res) => {
    res.redirect("/surveys");
  });

  // Logout user
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  // Test that I logged in
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
