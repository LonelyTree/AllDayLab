const express = require('express');
const app = express.route();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(methodOverride('_method'))



app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
});
