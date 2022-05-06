const express = require('express');

const config = require('./config/config');
const rasp = require('./util/raspberry');
const profile = new require('./util/profile');

let currentProfile = profile.getProfile('default');
const app = express();
const raspberry = new rasp(config.debug, currentProfile, (info) => {
    let { state,hotCold,tempToReach } = info;
    let now = new Date();
    console.log(`Alle ${now.getHours()}:${now.getMinutes()} ${state ? 'attivo' : 'spento'} ${hotCold ? 'caldo' : 'freddo'} e bisogna raggiungere ${tempToReach}°C`);
});


raspberry.start();
app.use(express.json())
app.use(express.static('../build'));

app.listen(8085, () => {
    console.log('Server started on port 8085');
})

app.get('/profile/:profile', (req, res) => {
    let profileName = req.params.profile;
    let profileData = profile.getProfile(profileName);
    if (profileData) {
        return res.json(profileData);
    }
    return res.status(404).json({
        error: 'Profile not found'
    })
})

app.post('/profile/conf/add', (req, res) => {
    let { profileName,start,end,state,hotCold,tempToReach} = req.body;
    let conf = {
        start,
        end,
        state,
        hotCold,
        tempToReach
    }
    let result = profile.addConf(profileName, conf);
    if (result) {
        return res.json({
            success: true
        })
    }
    return res.status(500).json({
        error: 'Error adding conf'
    })
})

app.post('/profile/conf/remove/', (req, res) => {
    let {index,profileName} = req.body;
    let profileData = profile.removeConf(index,profileName);
    if (profileData) {
        return res.json({success: true});
    }
    return res.status(500).json({
        error: 'Error removing profile'
    })
})

if(config.debug){
    app.get('/debug', (req, res) => {

    })
}