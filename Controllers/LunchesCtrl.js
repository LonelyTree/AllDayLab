const Lunches = require('../models/lunchbox')


const index = (req, res) => {
    res.render('index.ejs', {
        lunches: Lunches,
    })
}


module.exports = {
    index
}