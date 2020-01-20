const production = require("./prod");
const development = require("./dev");

switch (process.env.NODE_ENV) {
  case "production":
    module.exports = production;
    break;
  default:
    module.exports = development;
    break;
}
