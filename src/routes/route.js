const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})




// [‘Rang de basanti’, ‘The shining’, ‘Lord of the rings’, ‘Batman begins’]



// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response')
})

// 1.Create an API for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.


router.get('/movies' , function (req , res) {
  console.log("movies is : ", req.params)
  let movies = ['Rang de basanti' , 'The shining' , 'Lord of the rings' , 'Batman begins']
  
  res.send(movies)
})


// 2.Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it should return the //movie in your array at index 1). You can define an array of movies again in your api

router.get('/movies-lists/:index' , function (req , res) {
    console.log("movies is : ", req.params)
    let movies = ['Rang de basanti' , 'The shining' , 'Lord of the rings' , 'Batman begins']
    const index = req.params.index
    res.send(movies[index])
  })

// 3.Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.


router.get('/movie/:index' , function (req , res) {
    console.log('movie is ', req.params)
    let movie = ['Rang de basanti' , 'The shining' , 'Lord of the rings' , 'Batman begins']
    const index = req.params.index
    if (index > movie.length){
        res.send('Please use a valid index')
    }
     res.send (movie[index])
    
}) 

// 4.Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. Each movie object should have values - id, name. An example of movies array is 
// [ {
//  “id”: 1,
//  “name”: “The Shining”
// }, {
//  “id”: 2,
//  “name”: “Incendies”
// }, {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }, {
//  “id”: 4,
//  “name”: “Finding Nemo”
// }]

// Return the entire array in this api’s response

//================Answer=======================//

router.get('/films' , function (req , res) {
  console.log("films is : ", req.params)
  let films =    [    
    {id: 1,
    name: 'Lord of the rings' 
    },{
    id: 2,
    name: 'Batman begins'
    },{
        id: 3,
        name: 'Rang de basanti'
    },{
        id: 4,
        name: 'The shining'
    }];
  
  res.send(films)
})





// 5.Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/3 should return the movie object 
// {
//  “id”: 3,
//  “name”: “Rang de Basanti”
// }
// Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id

//=======================Answer========================//

router.get('/get/films/:filmId' , function(req , res) {
    console.log("problem no 5" + JSON.stringify(req.params));
    const films = [ {
       id: 1,
       name: 'Lord of the rings' 
    },{
    id: 2,
    name: 'Batman begins'
    },{
        id: 3,
        name: 'Rang de basanti'
    },{
        id: 4,
        name: 'The shining'
    }];

    const id = req.params;
    const id_index = id.filmId
    
    for(let i=0; i<films.length; i++){
        const film = films[i];
        if (film.id == id_index){
            return res.send(film)
        }
    }
    res.send("No movie exists with this id")
})
//let movies = ['Rang de basanti' , 'The shining' , 'Lord of the rings' , 'Batman begins']

module.exports = router;