const express = require('express');
const underscore = require('underscore')
const router = express.Router();



router.get('/sol1', function (req , res) {
    let array = [1, 2, 3, 5, 6, 7]
    let total = 0
    for(let i=0;i<array.length ; i++) {
        total += array[i]
    }
       let n =array[array.length -1]
       let missingNumber = n*(n+1)/2

       res.send({data: missingNumber -total})
})

router.get('/sol2', function (req , res) {
    let array = [33, 34, 35, 37, 38]
    let n = array.length 
    let total = 0
    for(let i=0;i<array.length ; i++) {
        total += array[i]
    }
       let first = array[0]
       let last = array.pop()

       let consectivenumSum = (n +1)*(first + last)/2       
       let missingNumber = consectivenumSum - total

       res.send({data: missingNumber})
})

module.exports = router;
// adding this comment for no reason