const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log('listening on port ' + port);
})

// simple get request that sends "hello world" to the DOM
// app.get('/', (req, res) => {
//     res.send("Hello World");
// })

app.get('/', (req, res) => {
    // __dirname is where you are currently in the folders
    res.sendFile(__dirname + '/index.html');
})

app.post("/quotes", (req, res) => {
    console.log(req.body);
})

console.log(__dirname);
console.log("Hello from server.js with nodemon!");