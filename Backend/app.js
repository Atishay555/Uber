const dotenv = require('dotenv') ; 
dotenv.config() ; 
const cors = require('cors') ; 
const cookieParser  =require('cookie-parser')  ; 
const express = require ('express') ; 
const app = express() ; 
const userRoutes = require('./routes/user.routes');

app.use(cookieParser()) ; 
app.use(cors()) ; 
app.use(express.json());
app.use(express.urlencoded({extended:true})) ; 

app.get('/',(req,res)=>{
  res.send("Hello  World") ; 
})
app.use('/users',userRoutes);
module.exports = app ; 
