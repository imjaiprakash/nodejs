const EventEmmiter = require("node:events");

const eventEmmiter = new EventEmmiter();

eventEmmiter.on('myEvent', (p1, p2, p3)=> {
    console.log(`My event triggered whith param as ${p1} ${p2} ${p3}`);
});



eventEmmiter.emit('myEvent', 'Hello, world!', 10, 15);


