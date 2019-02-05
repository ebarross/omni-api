const express = require('express');
const router = express.Router();
const tweet = require('./tweet/tweet.route');

router.use('/tweet', tweet);

module.exports = router;