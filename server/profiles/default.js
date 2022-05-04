module.exports={
    "timeout": 600000,
    "confs": [
        {
            "start": 7200,
            "end": 14400,
            "hotCold": false,
            "tempToReach": 20,
            "state": true
        },
        {
            "start": 28800,
            "end": 36000,
            "hotCold": true,
            "tempToReach": 50,
            "state": true
        },
        {
            "start": 36000,
            "end": 43200,
            "hotCold": true,
            "tempToReach": 20,
            "state": true
        },
        {
            "start": 43200,
            "end": 46800,
            "state": false
        },
        {
            "start": 48600,
            "end": 50400,
            "state": true,
            "hotCold": true,
            "tempToReach": 0
        },
        {
            "start": 52200,
            "end": 54000,
            "state": true,
            "hotCold": true,
            "tempToReach": 0
        }
    ]
}