let Gpio = require('onoff').Gpio;
module.exports = {
    hot: { pin: new Gpio(4, 'out'), state: false },
    cold: { pin: new Gpio(17, 'out'), state: false }
}