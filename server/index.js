const express = require('express');
const bodyParser = require('body-parser');
const message = require(__dirname + '/controllers/messages_controller.js');

const port = 3000
const app = express();
const messageBaseURL = '/api/messages';

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))

app.post(messageBaseURL, message.create)
app.get(messageBaseURL, message.read)
app.put(`${messageBaseURL}/:id`, message.update)
app.delete(`${messageBaseURL}/:id`, message.delete)

app.listen(port, ()=>{console.log(`Hello MitchBoy. My name is Jarvis. I am listening on port ${port}.`)})