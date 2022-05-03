module.exports = {
    timeout: 10*60*1000,
    confs: [
        {
            start: 8*3600,
            end: 10*3600,
            hot: true,
            tempToReach: 50,
            state: true
        },
        {
            start: 10*3600,
            end: 12*3600,
            cold: true,
            tempToReach: 20,
            state: true
        },
        {
            start: 12*3600,
            end: 13*3600,
            state: false
        },
        {
            start: 2*3600,
            end: 4*3600,
            state: false
        },
        {
            start: 18*3600,
            end: 21*3600,
            state: true,
            hot:true,
            tempToReach: 50
        },
    ]
}