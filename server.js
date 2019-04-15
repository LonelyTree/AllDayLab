const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')
const lunchRoute = require("./Router/lunches")


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use('/lunches',lunchRoute)


app.listen(3000, () => {
    console.log('app listening on port: ', 3000);
});
