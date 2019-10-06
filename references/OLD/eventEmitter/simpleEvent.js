var events = require('events');

var myEvent = new events.EventEmitter();

myEvent.on('someEvent', function(msg){
  console.log(msg);
});

myEvent.emit('someEvent', 'Your first event is emitted.')
