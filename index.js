const app = require ('./src/app');

const mongoose = require('mongoose');
const config = require('./config/keys');
mongoose.connect(config.mongoURI, { useNewUrlParser: true }); // code connects to MongoDB

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
});