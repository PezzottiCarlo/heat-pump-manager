const express = require('express');
const app = express();
//const rasp = require('./util/raspberry');
const profile = new require('./util/profile');

//let raspberry = new rasp();
let raspberry = ""

app.use(express.json())

app.listen(8085, () => {
    console.log('Server started on port 8085');
})

app.get('/profile/:profile', (req, res) => {
    let prf = req.params.profile;
    let profileData = profile.getProfile(prf);
    if (profileData) {
        return res.json(profileData);
    }
    return res.status(404).json({
        error: 'Profile not found'
    })
})