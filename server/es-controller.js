var request = require('request');
request.debug = true;

var esUrl = "http://localhost:2113/streams/";
var auth = {
  'user': 'admin',
  'pass': 'changeit',
  'sendImmediately': false
};
var headers = {
  "Content-Type": "application/vnd.eventstore.events+json"
};

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


var testES = {

    populateSingleDomainEvent: function() {
      var aggregateId = guid();
      var eventType = 'domainEvent';
      var events = [{
        eventId: aggregateId,
        eventType: eventType,
        data: {
          "name": "Martin"
        }
      }];

      this.pushDomainEvent(guid(), 'domainEvent', events);
    },

    populateMultipleDomainEvents: function() {
      var aggregateId = guid();
      var eventType = 'domainEvent';
      var events = [{
        eventId: aggregateId,
        eventType: eventType,
        data: {
          "name": "Martin"
        }
      },
      {
        eventId: aggregateId,
        eventType: eventType,
        data: {
          "name": "Ferdinand"
        }
      },
      {
        eventId: aggregateId,
        eventType: eventType,
        data: {
          "name": "Alex"
        }
      }];

      this.pushDomainEvent(aggregateId, eventType, events);
    },

    populateMassiveAmountOfDomainEvents: function() {
      var aggregateId = guid();
      var eventType = 'domainEvent';
      var events = [];
      var i;
      for (i=0; i<999999; i++) {
        events.push({
          eventId: aggregateId,
          eventType: eventType,
          data: {
            "randomValue": "random number " + (Math.random() * 1000000)
          }
        });
      }

      this.pushDomainEvent(aggregateId, eventType, events);
    },

    pushDomainEvent: function(aggregateId, aggregateType, events) {
      request({
        uri: esUrl + aggregateType + '-' + aggregateId,
        method: 'POST',
        json: events,
        headers: headers,
        auth: auth
      }, function(error, response, body) {
        console.log(body);
      });
    },

    populateWithMetaData: function() {
      var aggregateId = guid();
      var eventType = 'domainEvent';
      var events = [{
        eventId: aggregateId,
        eventType: eventType,
        data: {
          "name": "Martin"
        },
        metadata: {
          "key": "blubb"
        }
      }];

      this.pushDomainEvent(guid(), 'domainEvent', events);

    }

};

module.exports = testES;