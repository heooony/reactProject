const express = require('express')
const app = express()
const port = 3000
const {User} = require('./models/User')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded)({extended: true})
app.use(bodyParser.json())

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

app.post('/register'), (req, res) => {
  const user = new User(req.body)
  user.save((err, doc) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
}