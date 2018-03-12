const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
//creating express app
const app = express();
const routes = require('./routes/router');

//Turning raw requests into usable properties on req.body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/', routes);

app.set('port', process.env.PORT || 3887);

const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});