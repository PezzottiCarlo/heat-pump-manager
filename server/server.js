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
    if (profileData) {
        return res.json(profileData);
    }
    return res.status(404).json({
        error: 'Profile not found'
    })
})

app.post('/profile/conf/add', (req, res) => {
    let { profileName,start,end,state } = req.body;
    let conf = {
        start,
        end,
        state
    }
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