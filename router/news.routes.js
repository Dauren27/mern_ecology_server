const newsController = require("../controllers/news-controller");
const Router = require("express").Router;

const router = new Router();

router.get("/news", newsController.getAll);
router.post("/news", newsController.create);
router.put("/news/:id", newsController.update);
router.delete("/news/:id", newsController.delete);
router.get("/news/:id", newsController.getOne);

module.exports = router;
