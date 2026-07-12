const express = require("express");
const userRouter = require('./routes/user')
const { connectMongoDb } = require('./connection')

const app = express();
const PORT = 8000;

connectMongoDb('mongodb://127.0.0.1:27017/trial-app')
// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter)

// Start Server
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});