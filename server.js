const express=require('express')
const app=express()
const mysql=require('mysql')
const cors= require('cors')
require('dotenv').config()
const biodataRouter = require('./routes/biodata')

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
})

con.connect(function (err) {
  if (err) {
    console.log('Database connection error')
  } else {
    console.log('Database connection success')
  }
})

app.use(function(req, res, next){
	req.con=con
	next()
})

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',function(req,res){
  res.send('Welcome...')
})

app.use('/biodata', biodataRouter)

app.listen(3000, function () {
  console.log('Server listening on port 3000')
})
