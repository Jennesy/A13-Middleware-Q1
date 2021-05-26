// app.js
const express = require('express')
const app = express()
const port = 3000

function logTimeMethodURL(req, res, next) {
  const time = new Date
  console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} | ${req.method} from ${req.originalUrl}`)
  next()
}

app.get('/', logTimeMethodURL, (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', logTimeMethodURL, (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', logTimeMethodURL, (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', logTimeMethodURL, (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, logTimeMethodURL, () => {
  console.log(`App running on port ${port}`)
})