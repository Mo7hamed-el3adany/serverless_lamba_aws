const router = require("express").Router();
const welcomeCtrl = require("../controllers/welcomeCtrl")

router.get("/", welcomeCtrl.rootMessage);
router.post("/calc", welcomeCtrl.calcNumbers);
module.exports = router;