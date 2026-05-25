const router = require("express").Router();
const controller = require("../controllers/curriculumController");
router.get("/units", controller.getUnits);
router.get("/units/:id", controller.getUnitById);
router.post("/units", controller.createUnit);
router.put("/units/:id", controller.updateUnit);
module.exports = router;
