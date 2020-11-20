const express = require('express')
const app = express()
const port = 3001

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://oueya1479:Kimdongheon316!@myapp.rq6tl.mongodb.net/myapp?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

