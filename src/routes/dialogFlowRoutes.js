const express = require('express');
const chatbot = require('../../chatbot/chatbot');

const dialogFlowRouter = express.Router();

dialogFlowRouter.get('/', (req, res) => {
    res.send({'Hello': 'Chatable'});
});
// this is a chatbot

dialogFlowRouter.post('/api/df_text_query', async (req, res) => {
    let responses = await chatbot.textQuery(req.body.text, req.body.parameters);
    res.send(responses[0].queryResult);
});

dialogFlowRouter.post('/api/df_event_query', async (req, res) => {
    let responses = await chatbot.eventQuery(req.body.event, req.body.parameters);
    res.send(responses[0].queryResult);
});

module.exports = dialogFlowRouter;