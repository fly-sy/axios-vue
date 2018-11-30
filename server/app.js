const express = require('express')

const app = express()

app.get('/api/getinfo', (req, res) => {
  res.json({ name: 'fly', age: 18 })
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})