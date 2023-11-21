require('dotenv').config()
const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send("twitter is handle");
})

app.get('/login',(req,res) => {
    res.send('<h1>Place to login at chai </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})