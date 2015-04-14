var express = require('express');
var router = express.Router();
var esCtrl = require('../es-controller.js');
var esCtrl2 = require('../es-controller2.js');

router.get('/', function(req, res, next) {

  //esCtrl.populateSingleDomainEvent();
  //esCtrl.populateMultipleDomainEvents();
  //esCtrl.populateMassiveAmountOfDomainEvents();
  //esCtr.test();

  esCtrl2.test();

  res.render('stream', {
  });

});

module.exports = router;
