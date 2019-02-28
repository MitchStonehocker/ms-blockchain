// app/index.js

const express = require('express')
const Blockchain = require('../blockchain')

const HTTP_PORT = process.env.HTTP_PORT || 3100
// cmd:> HTTP_PORT=3101 npm run dev

const app = express()
const bc = new Blockchain()

app.get('/blocks', (req, res) => {
  res.json(bc.chain)
})

app.listen(HTTP_PORT, () => console.log(`Listing on port ${HTTP_PORT}`))
