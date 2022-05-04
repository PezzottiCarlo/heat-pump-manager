const fs = require('fs');
module.exports = class Profile {
    static getProfile(profileName) {
        if (fs.existsSync(`./profiles/${profileName}.js`)) {
            return require(`../profiles/${profileName}`);
        }
        return false;
    }

    static exportProfile(profileName, profileData) {
        let sortedData = this.sortDataByStart(profileData.confs);
        profileData.confs = sortedData;
        fs.writeFileSync(`./profiles/${profileName}.js`, `module.exports=${JSON.stringify(profileData, null, 4)}`);
    }

    static addConf(profileName, conf) {
        let profile = this.getProfile(profileName);
        if (!profile) return false;
        if(!(conf.start && conf.end && conf.state!==null)) return false;
        if (this.timeIntervalExists(profile, conf.start, conf.end)) {
            return false;
        }
        profile.confs.push(conf);
        this.exportProfile(profileName, profile);
        return true;
    }
    

    static removeConf(profileIndex, profileName) {
        let profile = this.getProfile(profileName);
        if (!profile) return false;
        if (profile.confs.length > profileIndex) {
            profile.confs.splice(profileIndex, 1);
            this.exportProfile(profileName, profile);
            return true;
        }
        return false;
    }

    static sortDataByStart(data) {
        return data.sort((a, b) => {
            return a.start - b.start;
        });
    }

    static timeIntervalExists(profile, start, end) {
        let confs = profile.confs;
        for (let i = 0; i < confs.length; i++) {
            let conf = confs[i];
            if (start >= conf.start && end <= conf.end) {
                return true;
            }
        }
        return false;
    }
}