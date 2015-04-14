var express = require('express');
var router = express.Router();
var esCtrl = require('../es-controller.js');

router.get('/', function(req, res, next) {

  //esCtrl.populateSingleDomainEvent();
  //esCtrl.populateMultipleDomainEvents();
  //esCtrl.populateMassiveAmountOfDomainEvents();

  res.render('stream', {
  });

});

module.exports = router;
