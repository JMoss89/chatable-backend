const express = require('express');
const dialogflow = require('dialogflow');
const config = require('../../config/keys');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);

const dialogFlowRouter = express.Router();

dialogFlowRouter.get('/', (req, res) => {
    res.send({'Hello': 'Chatable'});
});

dialogFlowRouter.post('/api/df_text_query', async (req, res) => {
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: req.body.text,
            // The language used by the client (en-US)
            languageCode: config.dialogFlowSessionLanguageCode
          },
        },
    };
    let responses = await sessionClient
        .detectIntent(request)

    res.send(responses[0].queryResult);
});

dialogFlowRouter.post('/api/df_event_query', (req, res) => {
    res.send({'do': 'event query'});
});

module.exports = dialogFlowRouter;