const express = require('express');
const underscore = require('underscore')
const router = express.Router();


let array = [12, "Functionup",]
router.post('/test-post1', function (req , res) {
    let element = req.body.element
    array.push(element)
    console.log({msg: array, status:true})
    res.send({msg: array, status:true})
})

let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },

    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ]
    },

    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ]
    },
]


router.post('/players', function (req, res) {
    for(let i=0; i<=players.length-1;i++){
        if(players[i].name == req.body.name){
            res.send("name already exists")
        }
    
    }
    players.push(req.body)
    console.log({data: players, status:true})
    res.send({data: players, status:true})
})




module.exports = router;
// adding this comment for no reason