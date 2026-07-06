const express = require('express')
const fs = require('fs')
let users = require('./MOCK_DATA.json')
const app = express()
const port = 8000

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// adding in multiple middlewares

app.use((req, res, next) => {
    console.log("Here we are passing a middleware");
    next()
})

app.get('/users', (req, res) => {
    // return res.end("Home Page")
    const html = `
    <ul>
    ${users.map((user) => 
        `<li>${user.first_name}</li>`
    )}
    </ul>
    `
    return res.send(html)
})

app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id === id)
    return res.json(user)
})

app.get('/api/users', (req, res) =>{
    console.log("Rendering data!!")
    return res.json(users)
})

app.post('/api/users', (req, res) =>{
    // Create New User
    const body = req.body
    users.push({ ...body, id: users.length + 1})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
        return res.json({ status: 'Success'})
        // return res.json()
    } )
    // return res.json({ status: "Pending" })
})

app.patch('/api/users/:id', (req, res) => {
  const userId = Number(req.params.id);
  const updates = req.body;

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users[userIndex] = {
    ...users[userIndex],
    ...updates
  };

  fs.writeFile(
    './MOCK_DATA.json',
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to update file" });
      }

      return res.json({
        status: "Updated",
        user: users[userIndex]
      });
    }
  );
});
 
app.delete('/api/users/:id', (req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found" });
  }

  users.splice(userIndex, 1);

  fs.writeFile(
    './MOCK_DATA.json',
    JSON.stringify(users, null, 2),
    (err) => {
      if (err) {
        return res.status(500).json({ error: "Failed to delete user" });
      }

      return res.json({
        status: "Deleted",
        id: userId
      });
    }
  );
});

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})