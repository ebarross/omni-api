const express = require('express');
const router = express.Router();
const controller = require('../tweet/tweet.controller');

router.get('/', controller.getAll);
router.post('/', controller.create);
router.post('/:id/like', controller.addLike);

module.exports = router;