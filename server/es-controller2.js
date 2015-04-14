var EventStore = require("nodejs-EventStore");
var es = EventStore.connect('127.0.0.1', 2113);

var esCtrl = {

  test: function() {

    es.readAndSubscribeToStream('/streams/domainEvent-29254020-e5c0-8dca-f0d7-382a25663def', function(event, data) {
      //console.log(data);
    });

  }

};

module.exports = esCtrl;