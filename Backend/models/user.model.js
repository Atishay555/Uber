const mongoose = require('mongoose') ; 
const bcrypt = require('bcrypt') ; 
const jwt = require('jsonwebtoken') ; 


const UserSchema = new mongoose.Schema({
  fullname:{
    firstname :{
    type:String , 
    required :true,
    minlength : [3, 'firstname must consist of 3 letters']
  },
    lastname:{
      type: String ,  
      minlength:[3,'Lastname must consist of 3 letters']
    }
  
  },
  email:{
    type:String , 
    required:true , 
    minlength :  [5, 'email  must be consist of 5 letter']
  },
  password:{
    type:String , 
    required: true , 
    select : false
  },
  SocketId:{
    type:String
  }


})

UserSchema.methods.generateAuthToken = function (){
  const token  = jwt.sign({id :this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
  return token  ;
}
UserSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password,this.password) ; 
}
UserSchema.statics.hashedPassword = async function (password){
  return await bcrypt.hash(password,10) ; 
}

const UserModel = mongoose.model('user',UserSchema)
module.exports = UserModel ; 