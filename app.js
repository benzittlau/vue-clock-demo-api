const express = require('express')
const moment = require('moment-timezone')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/timezone[\/]:zone', (req, res) =>
  res.send(moment().tz(req.params.zone).format('h:mm:ssa z'))
)


app.listen(3000, () => console.log('Example app listening on port 3000!'))
