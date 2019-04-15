const Lunches = require('../models/lunchbox')


const get = (req, res) => {
    res.render('index.ejs', {
        lunches: Lunches,
    })
}

const put = (req, res) => {
    req.params.id = req.body
    res.redirect('index.ejs', {
        lunches: Lunches[req.params.id],
    })
}

const del = (req, res) => {
    Lunches.splice(req.params.id, 1)
    res.render('index.ejs', {
        lunches: Lunches
    });
}

module.exports = {
    get,
    put,
    del
}