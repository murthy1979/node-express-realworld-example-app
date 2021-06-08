#sample application test
var router = require('express').Router();

router.use('/api', require('./api'));

module.exports = router;
