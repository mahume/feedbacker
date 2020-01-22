const prod = require("./prod");
const dev = require("./dev");

switch (process.env.NODE_ENV) {
  case "production":
    module.exports = prod;
    break;
  default:
    module.exports = dev;
    break;
}
