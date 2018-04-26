
var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectionHandler = function connected() {
    console.log('Connection successful!');
    eventEmitter.emit('data_received');
}

eventEmitter.on('connection', connectionHandler);
eventEmitter.on('data_received', function() {
    console.log('Receive data successful!')
})

eventEmitter.emit('connection');

console.log('Done!')

