const express=require ('express')
const router = express.Router();
const Lunches = require('../models/lunchbox')
const lunchCtrl = require('../Controllers/LunchesCtrl.js')


  router.get('/', lunchCtrl.index);



  router.delete('/:id', (req, res) => {
    Lunches.splice(req.params.id, 1)
    res.render('index.ejs', {
      lunches: Lunches
    });
  });





module.exports=router;