module.exports={
    "timeout": 600000,
    "confs": [
        {
            "start": 7200,
            "end": 14400,
            "state": false
        },
        {
            "start": 28800,
            "end": 36000,
            "hot": true,
            "tempToReach": 50,
            "state": true
        },
        {
            "start": 36000,
            "end": 43200,
            "cold": true,
            "tempToReach": 20,
            "state": true
        },
        {
            "start": 43200,
            "end": 46800,
            "state": false
        }
    ]
}