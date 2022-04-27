const express = require('express');
const dialogflow = require('dialogflow');
const config = require('../../config/keys');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(config.googleProjectID, config.dialogFlowSessionID);

const dialogFlowRouter = express.Router();

dialogFlowRouter.get('/', (req, res) => {
    res.send({'Hello': 'Chatable'});
});

dialogFlowRouter.post('/api/df_text_query', (req, res) => {
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
    sessionClient
        .detechIntent(request)
        .then(responses => {
            console.log('Detected intent');
            const result = responses[0].queryResult;
            console.log(`Query: ${result.queryText}`);
            console.log(`Response: ${result.fulfullmentText}`);
            if(result.intent){
                console.log(`Intent: ${result.intent.displayName}`);
            }else{
                console.log('No intent matched.');
            }
        })
        .catch(err => {
            console.error('ERROR:', err);
        });

    res.send({'do': 'text query'});
});

dialogFlowRouter.post('/api/df_event_query', (req, res) => {
    res.send({'do': 'event query'});
});

module.exports = dialogFlowRouter;