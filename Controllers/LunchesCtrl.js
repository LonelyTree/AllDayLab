const Lunches = require('../models/lunchbox')

// I N D E X
const getIndex = (req, res) => {
    res.render('index.ejs', {
        lunches: Lunches,
    })
}

const delIndex = (req, res) => {
    Lunches.splice(req.params.id, 1)
    res.render('index.ejs', {
        lunches: Lunches
    });
}

// S H O W
const getShow = (req, res) => {
    res.render('show.ejs', {
        lunches: Lunches[req.params.id],
    })
}
// N E W
const getNew = (req, res) => {
    res.render('new.ejs')
}

const postNew = (req, res) => {
    req.params.id = req.body
    Lunches.push(req.params.id)
    res.redirect('/lunches')
}

// E D I T
const getEdit = (req, res) => {
    res.render('edit.ejs', {
        lunches: Lunches[ req.params.id ],
        id: req.params.id
    })
}

const putEdit = (req, res) => {
    console.log(req.body)
    Lunches[ req.params.id ] = req.body;
    res.redirect('/lunches')
}


module.exports = {
    getIndex,
    postNew,
    delIndex,
    getShow,
    getNew,
    getEdit,
    putEdit
}