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

    foo: function() {
        this.pushDomainEvent({
          eventId: guid(),
          eventType: 'domainEvent',
          data: {"name": "Martin"}
        });
    },

    pushDomainEvent: function(event) {
        request({
          uri: esUrl + event.eventType + '-' + event.eventId,
          method: 'POST',
          json: [event],
          headers: headers,
          auth: auth
        }, function(error, response, body) {
          console.log(body);
        });
    }

};

module.exports = testES;