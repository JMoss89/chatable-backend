const express = require ('express');
const bodyParser = require('body-parser');
const dialogFlowRouter = require('./routes/dialogFlowRoutes');

const app = express();

app.use(bodyParser.json());


module.exports = app;