const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "LoginSystem",
})

app.post ('/Register', (req, res) => {

    const username = req.body.username
    const password = req.body.password

    db.query("INSERT INTO travelers (username, password) VALUES(?, ?)", [username, password], (err, result) => {
        console.log(err)
    })

    db.query("INSERT INTO countries (username, password) VALUES(?, ?)", [username, password], (err, result) => {
        console.log(err)
    })

  
})

const port = 3001

app.listen(port, () => 
console.log(`Example app listening on port ${port}!`))