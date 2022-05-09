const router = require("express").Router();
const welcomeCtrl = require("../controllers/welcomeCtrl")

router.get("/", welcomeCtrl.rootMessage);
 
module.exports = router;