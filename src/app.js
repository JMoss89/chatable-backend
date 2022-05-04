const express = require ('express');
const bodyParser = require('body-parser');
const dialogFlowRouter = require('./routes/dialogFlowRoutes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/', dialogFlowRouter);
// require('./routes/dialogFlowRoutes')(app);

module.exports = app;