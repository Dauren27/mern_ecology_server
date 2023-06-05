const eventController = require("../controllers/event-controller");
const Router = require("express").Router;

const router = new Router();

router.get("/event", eventController.getAll);
router.post("/event", eventController.create);
router.put("/event/:id", eventController.update);
router.delete("/event/:id", eventController.delete);
router.get("/event/:id", eventController.getOne);

module.exports = router;
