const router = require("express").Router();
const controller = require("../controllers/handbookController");
router.get("/program", controller.getProgram);
router.get("/entry-requirements", controller.getEntryRequirements);
router.put("/program", controller.updateProgram);
module.exports = router;
