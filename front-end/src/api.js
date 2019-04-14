import openSocket from 'socket.io-client';


// const socket = openSocket('http://localhost:8000');

const socket = {
    emit (message) {
        console.log(message);
    },
    on (message) {
        console.log(message);
    }
}

function subscribeToTimer(interval, cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTime', 1000);
}

export { subscribeToTimer };