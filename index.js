const express = require('express')
const app = express()
var path = require('path');
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/data', (req, res) => {
    res.sendFile(path.join(__dirname + '/data.json'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})