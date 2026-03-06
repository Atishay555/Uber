const http = require('http')   ;
const app = require('./app')   ;
const port = process.env.PORT || 3000  ; 
const connectToDb = require('./DB/db') ; 
connectToDb() ; 

const server = http.createServer(app) ; 

server.listen(port,()=>{
  console.log (`server is running on ${port}`)
})  ; 