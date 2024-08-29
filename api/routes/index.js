module.exports = (app) => {
  const rentals = require("../controllers/controller.js");
  const router = require("express").Router();

  router.post("/generalmessages", rentals.createGeneralMessage);
  router.get("/generalmessages", rentals.findAllGeneralMessages);
  router.delete("/generalmessages/:id", rentals.deleteGeneralMessage);

  router.post("/", rentals.create);
  router.get("/", rentals.findAll);
  router.get("/:id", rentals.findOne);
  router.put("/:id", rentals.update);
  router.delete("/:id", rentals.delete);
  // router.delete("/", rentals.deleteAll);

  app.use("/api/rentals", router);
};
