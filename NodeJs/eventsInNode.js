const EventEmitter = require('events')

//create an instance from class 
//that we get from the events module
const customEmmitter = new EventEmitter();

//listen / subscribe to the eveent - on
//pass the name of event in the argument 
customEmmitter.on('response', () => {
    console.log(`data recieved`)
})

// Finally emit the event 
customEmmitter.emit('response')