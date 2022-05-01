let Gpio = require('onoff').Gpio;
module.exports = {
    hot: new Gpio(4, 'out'),
    cold: new Gpio(17, 'out'),
}