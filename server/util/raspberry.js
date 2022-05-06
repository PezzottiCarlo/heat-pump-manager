module.exports = class Raspberry {
    constructor(debug = false,profile,callback) {
        this.debug = debug;
        this.callback = callback;
        this.profile = profile;
        if (debug) {
            this.pins = {
                hot: { pin: 4, state: false },
                cold: { pin: 17, state: false }
            }
        }
        else
            this.pins = require('./pinConf');
    }

    setProfile(profile){
        this.profile = profile;
    }

    setCallback(callback){
        this.callback = callback;
    }

    turnOn(pinName) {
        if (this.pins[pinName]) {
            if (!this.debug) this.pins[pinName].pin.writeSync(1);
            this.pins[pinName].state = true;
            return true;
        }
        return false;
    }

    turnOff(pinName) {
        if (this.pins[pinName]) {
            if (!this.debug) this.pins[pinName].pin.writeSync(0);
            this.pins[pinName].state = false;
            return true;
        }
        return false;
    }

    getState(pinName){
        if(this.pins[pinName]){
            return this.pins[pinName].state;
        }
        return undefined;
    }

    

    start(){
        let start=-1;
        let end=-1;
        this.intervall = setInterval(() => {
            let now = new Date();
            let nowTime = now.getHours()*3600+now.getMinutes()*60+now.getSeconds();
            for (let i = 0; i < this.profile.confs.length; i++) {
                let conf = this.profile.confs[i];
                if ((nowTime > conf.start && nowTime <= conf.end)) {
                    if(start!=conf.start && end!=conf.end){
                        start = conf.start;
                        end = conf.end;
                        if(conf.state){
                            if(conf.hotCold)this.turnOn('hot');
                            else this.turnOn('cold');                
                        }else{
                            this.turnOff('hot');
                        }
                        this.callback({
                            state: this.getState((conf.hotCold)?'hot':'cold'),
                            hotCold: conf.hotCold,
                            tempToReach: conf.tempToReach
                        })
                    }   
                }
            }
        }, 1000);
    }

    stop(){
        clearInterval(this.intervall);
    }
}