const express = require('express');

const dialogFlowRouter = express.Router();

dialogFlowRouter.get('/', (req, res) => {
    res.send({'Hello': 'Chatable'});
});

dialogFlowRouter.post('/api/df_text_query', (req, res) => {
    res.send({'do': 'text query'});
});

dialogFlowRouter.post('/api/df_event_query', (req, res) => {
    res.send({'do': 'event query'});
});

module.exports = dialogFlowRouter;