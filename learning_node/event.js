var events = require('events');
console.log(events);
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log("This is what will happen when an event happens");
}

//Assign the event handler to an event:
eventEmitter.on('triggerEvent', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('triggerEvent');
