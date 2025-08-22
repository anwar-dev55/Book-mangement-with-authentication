const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose') 
const userRouter = require('./router/user.router')
const bookRouter = require('./router/book.router')

const app = express()
app.use(bodyparser.json())
const port = 3300
const uri = "mongodb+srv://camb:123camb123@camb.tchooaq.mongodb.net/?retryWrites=true&w=majority&appName=camb";

const connectToDB = async() =>{
try{
mongoose.set('strictQuery', false)
mongoose.connect(uri)
console.log("ConnecttoDB")
}
catch(err){
  console.log("connect to db err", err)
  process.exit()
}

}
connectToDB()

app.use('/' , userRouter)
app.use('/',bookRouter)

app.use(function(req,res){
    res.status(404).send({url : req.originalUrl + ' not found'})
})



app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
