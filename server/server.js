const express = require('express');
const app = express();
const rasp = require('./util/raspberry');

let raspberry = new rasp();

app.listen(8085, () => {
    console.log('Server started on port 8085');
})

app.get('/:pin/:state', (req, res) => {
    let pin = req.params.pin;
    let state = req.query.state;

    if (state === 'on') {
        console.log('Turning on pin: ' + pin);
        raspberry.turnOn(pin);
        res.send('Turning on pin: ' + pin);
    } else if (state === 'off') {
        console.log('Turning off pin: ' + pin);
        raspberry.turnOff(pin);
        res.send('Turning off pin: ' + pin);
    } else {
        console.log('Invalid pin state: ' + state);
        res.send('Invalid pin state: ' + state);
    }
})