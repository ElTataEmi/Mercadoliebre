const express = require ("express");
const path = require("path");

const app = express();
const port = 3000;


app.use(express.static('public'))


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'./views/home.html'))
})

app.get("/Register", (req, res) => {
    res.sendFile(path.join(__dirname, './views/register.html'))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
})

app.listen(port, () => console.log(`http://localhost:${port}`))