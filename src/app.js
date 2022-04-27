const express = require ('express');
const bodyParser = require('body-parser');
const dialogFlowRouter = require('./routes/dialogFlowRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/', dialogFlowRouter);
// require('./routes/dialogFlowRoutes')(app);

module.exports = app;