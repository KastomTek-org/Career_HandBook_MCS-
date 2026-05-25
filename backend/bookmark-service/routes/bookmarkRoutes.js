const router = require("express").Router();
const controller = require("../controllers/bookmarkController");
router.get("/", controller.getBookmarks);
router.post("/toggle", controller.toggleBookmark);
module.exports = router;
