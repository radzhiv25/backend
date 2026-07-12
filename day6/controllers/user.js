const User = require('../models/user')

async function handleGetAllUser(req, res) {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

async function handleGetUserById(req, res) {
    const user = await User.find(req.params.id)
    if (!user){
        return res.status(404).json({ error: "User Not Found" })
    } 
    return res.json(user)
}

// async function handleUpdateUserById()

async function handleDeleteUserById(req, res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({ msg : "User Deleted!"})
}

async function handleNewUserCreated(req, res){
        try {
        console.log("Incoming Body:", req.body);

        const body = req.body;

        // Validate required fields
        if (!body.firstName || !body.email) {
            return res.status(400).json({
                success: false,
                message: "firstName and email are required.",
            });
        }

        // Create User
        const user = await User.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            jobType: body.jobType,
            gender: body.gender,
        });

        console.log("User Created:", user);

        return res.status(201).json({
            success: true,
            message: "User created successfully.",
            data: user,
        });
    } catch (err) {
        console.error(err);

        // Duplicate email error
        if (err.code === 11000) {
            return res.status(409).json({
                success: false,
                message: "Email already exists.",
            });
        }

        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

module.exports = {
    handleGetAllUser,
    handleGetUserById,
    handleDeleteUserById,
    handleNewUserCreated
}