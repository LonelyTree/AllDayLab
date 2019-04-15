const express=require ('express')
const router = express.Router();
const Lunches = require('../models/lunchbox')
const lunchCtrl = require('../Controllers/LunchesCtrl.js')


  router.get('/', lunchCtrl.index);


  

  router.delete('/:id', lunchCtrl.del);



  router.get('/new', lunchCtrl.new);


  router.get('/:id',(req,res)=>{
    res.render(show.ejs,{
      lunches:Lunches[req.params.id]
    })
  })


module.exports=router;