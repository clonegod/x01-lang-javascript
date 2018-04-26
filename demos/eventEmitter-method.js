var events = require('events');
var eventEmitter = new events.EventEmitter();

// bind callback, use 'addListener' or 'on'
var listener1 = function() {
    console.log('Listner1 execute...');
}
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', function(){
    console.log('Listner2 execute...');
});

// get listener count on 'connection' event
var listenerCount = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log('listener count=', listenerCount)

// emit event
eventEmitter.emit('connection')

// ---> remove listener1
eventEmitter.removeListener('connection', listener1);
console.log('remove listern1')

listenerCount = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log('listener count=', listenerCount)

eventEmitter.emit('connection');

console.log('Done!')
