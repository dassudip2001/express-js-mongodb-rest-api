const express = require('express')
// mongo
const mongoose = require('mongoose');
const app = express()
url='mongodb://localhost/demo'

app.use(express.json())

// app.use(express.json());
// connection mongodb
mongoose.connect(url,{useNewUrlParser:true})
const con=mongoose.connection
con.on('open',function(){
  console.log("connection is success ............");
})

// 

const port = 3000


const bookRouter=require('./routers/books')
app.use('/books',bookRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})