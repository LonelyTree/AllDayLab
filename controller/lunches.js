const express=require ('express')
const router = express.Router();
const Lunches=require('../models/lunchbox.js')

router.get('/', (req, res) => {
  
    res.render('index.ejs',{
        lunches: Lunches
    });
  });




module.exports=router;