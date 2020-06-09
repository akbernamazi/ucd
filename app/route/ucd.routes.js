const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.post("/api/ucd/update", controller.update);

  app.delete("/api/ucd/del", controller.remove);
  app.get("/api/ucd/details", controller.details);
};
