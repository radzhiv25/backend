const express = require('express')
const { handleGetUserById, handleGetAllUser, handleDeleteUserById, handleNewUserCreated } = require('../controllers/user')
const router = express.Router()

router
    .route("/")
    .get(handleGetAllUser)
    .post(handleNewUserCreated)

router
    .route('/:id')
    .get(handleGetUserById)
    .delete(handleDeleteUserById)

router.get("/", async(req, res) => {
    const allDbUsers = await User.find({});
    console.log(allDbUsers)
    return res.json(allDbUsers)
})

module.exports = router;