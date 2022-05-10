const router = require("express").Router();
const calcCtrl = require("../controllers/calcCtrl")

router.post("/calc", calcCtrl.calcNumbers);
module.exports = router;