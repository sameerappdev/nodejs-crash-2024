// used for building real time apps through custom and built in events for stream lick sockets
import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

const greetHandler = (name) => {
    console.log('Hello ' + name)
}

const byeHandler = (name) => {
    console.log('Bye ' + name)
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('bye', byeHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('bye', 'John');

// Error handling 
myEmitter.on('error', (err) => {
    console.log('An Error Occured: ', err)
});

// Simulate Error
myEmitter.emit('error', new Error('Something went wrong'));
