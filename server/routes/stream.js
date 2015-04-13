var express = require('express');
var router = express.Router();
var esCtrl = require('../es-controller.js');

router.get('/', function(req, res, next) {

  // TODO
  res.render('stream', {
    stream: esCtrl.createStream('stream-1')
  });

});

module.exports = router;
