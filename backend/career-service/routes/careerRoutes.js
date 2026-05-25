const router = require("express").Router();
const controller = require("../controllers/careerController");
router.get("/", controller.getCareers);
router.post("/", controller.createCareer);
module.exports = router;
