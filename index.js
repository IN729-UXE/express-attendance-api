const express = require('express')
const app = express()
var path = require('path');
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname + '/data.json'));
})

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})