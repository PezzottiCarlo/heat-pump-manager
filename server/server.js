const express = require('express');
const app = express();
//const rasp = require('./util/raspberry');
const profile = new require('./util/profile');

//let raspberry = new rasp();
let raspberry = ""

app.use(express.json())
app.use(express.static('../build'));

app.listen(8085, () => {
    console.log('Server started on port 8085');
})

app.get('/profile/:profile', (req, res) => {
    let profileName = req.params.profile;
    let profileData = profile.getProfile(profileName);
    /*console.log(profile.addConf(profileName, {
        start: 21*3600,
        end: 22*3600,
        state: false
    }));*/
    if (profileData) {
        return res.json(profileData);
    }
    return res.status(404).json({
        error: 'Profile not found'
    })
})

app.post('/profile/conf/remove/', (req, res) => {
    let {index,profileName} = req.body;
    console.log(index,profileName);
    let profileData = profile.removeConf(index,profileName);
    if (profileData) {
        return res.json({success: true});
    }
    return res.status(500).json({
        error: 'Error removing profile'
    })
})