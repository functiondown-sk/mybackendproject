const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.middleware1,auth.middleware2,auth.middleware3, userController.getUserData)

router.put("/users/:userId",auth.middleware1,auth.middleware2,auth.middleware3, userController.updateUser)

router.delete("/users/:userId",auth.middleware1,auth.middleware2,auth.middleware3, userController.deleteUser)



module.exports = router;