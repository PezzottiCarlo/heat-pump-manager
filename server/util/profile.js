const fs = require('fs');
module.exports = class Profile {
    static getProfile(profileName) {
        if (fs.existsSync(`./profiles/${profileName}.js`)) {
            return require(`../profiles/${profileName}`);
        }
        return false;
    }

    static exportProfile(profileName, profileData) {
        fs.writeFileSync(`./profiles/${profileName}.js`, JSON.stringify(profileData, null, 4));
    }
}