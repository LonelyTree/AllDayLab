const express = require('express')
const router = express.Router();
const Lunches = require('../models/lunchbox')
const lunchCtrl = require('../Controllers/LunchesCtrl.js')


router.get('/', lunchCtrl.get);

router.delete('/:id', lunchCtrl.del);

router.get('/new', lunchCtrl.put);



module.exports = router;