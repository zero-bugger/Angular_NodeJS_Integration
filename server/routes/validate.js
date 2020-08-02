var express =require('express');

var router= express.Router();
var  {validate}  = require("../controllers/validate")


router.get("/home",validate);
router.get("/",validate);
router.get('*',(req,res)=>{
    res.send("Invalid")
})


module.exports = router;