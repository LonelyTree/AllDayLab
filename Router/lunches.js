const express = require('express')
const router = express.Router();
const lunchCtrl = require('../Controllers/LunchesCtrl.js')



// N E W
router.get('/new', lunchCtrl.getNew);
router.post('/', lunchCtrl.postNew);

// I N D E X
router.get('/', lunchCtrl.getIndex);
router.delete('/:id', lunchCtrl.delIndex);


// S H O W
router.get('/:id', lunchCtrl.getShow)

// E D I T
router.get('/:id/edit', lunchCtrl.getEdit)
router.put('/:id', lunchCtrl.putEdit)


module.exports = router;