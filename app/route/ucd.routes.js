const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.post("/api/ucd/update", controller.update);

  app.delete("/api/ucd/delete_account", controller.remove);
  app.get("/api/ucd/get_details", controller.details);
};
