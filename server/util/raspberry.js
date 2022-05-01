let pins = require('./pinConf');
module.exports = class Raspberry {
    turnOn(pin) {
        if (pins[pin]) {
            return pins[pin].writeSync(1);
        }
        return false;
    }
    
    turnOff(pin) {
        if (pins[pin]) {
            return pins[pin].writeSync(0);
        }
        return false;
    }
}