var express = require('express');
var router = express.Router();

router.use('/content', require('./content.js'));

module.exports = router;
