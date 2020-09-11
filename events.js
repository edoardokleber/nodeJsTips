//This code show some examples about Events

import { EventEmitter } from 'events';

const eventEmitter = new EventEmitter();

eventEmitter.on('myEvent', () => {
    console.log('Listener 1, here we do a sum');
    let value = 10 + 10;
    console.log(value);
});

eventEmitter.on("myEvent", () => {
    console.log('Listener 2, here we do a division');
    let value = 100 / 10;
    console.log(value);
});

eventEmitter.once("myEvent", () => { //the listener will be discarded after listening for an event
    console.log('Listener 3, just happen one time');
});

eventEmitter.on('myEventWithParam', (data) => {
    console.log("myEventWithParam: ", data);
});

//logging the current active events
console.log("Active Events Names: ", eventEmitter.eventNames());

//firing some events
eventEmitter.emit('myEvent');
eventEmitter.emit('myEvent');
eventEmitter.emit('myEventWithParam', "My custom Param");

//same that .on
eventEmitter.addListener("added", () => {
    console.log("Listener added")
})

eventEmitter.emit("added");

//removing a listening
eventEmitter.removeListener("added", () => {
    console.log("Listener removed");
})

process.on("exit", () => {
    //do something...
    console.log("Exit");
} );

process.on('uncaughtException', () => {
    console.log('uncaughtException');
    process.exit(1);
});

//throw new Error('Test Error');

