const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect("mongodb://test:2974825e@ds221435.mlab.com:21435/omni-db", { useNewUrlParser: true })

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('tiny'));
app.get('/', (req, res) => {
    res.send('Olá mundo!');
});
app.use(routes);

server.listen(3000, () => console.log('Server listening on port 3000...'));

module.exports = app;