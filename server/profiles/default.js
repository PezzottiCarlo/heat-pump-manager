module.exports = {
    timeout: 10*60*1000,
    confs: [
        {
            start: 8,
            end: 10,
            hot: true,
            tempToReach: 50
        },
        {
            start: 10,
            end: 12,
            cold: true,
            tempToReach: 20
        }
    ]
}