var express = require('express');
var router = express.Router();
var esCtrl = require('../es-controller.js');

router.get('/', function(req, res, next) {

  // TODO:
  esCtrl.getProjection('projection-1');

});

module.exports = router;
