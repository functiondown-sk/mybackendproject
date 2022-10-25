const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const bookModel = require("../models/bookModel.js")
const bookControler = require("../controllers/bookControler.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", bookControler.createBook)

router.get("/getBooksData", bookControler.getBooksData)

module.exports = router;