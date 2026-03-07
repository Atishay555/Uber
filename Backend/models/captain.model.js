const mongoose = require('mongoose') ; 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
  fullname:{
    firstname:{
      type: String, 
      required : true , 
      minLength :[3,'firstname must consist of 3 letters'] 
    },
    lastname :{
      type :String , 
      minLength :[3,'lastname must consist of 3 letter']
    }
  },
  email:{
    type : String ,
    required: true ,
    minLength:[3,"must consist of 3 letter"],
    unique : true
  },
    password:{
    type:String , 
    required: true , 
    select : false
  },
  socketId:{
    type:String
  },
  status:{
    type : String ,
    enum :['active' , 'inactive'],
    default : 'inactive'
  },
  vehicle :{

    color:{
      type :String , 
      required : true , 
      minLength: 3
    },
        plate:{
      type :String , 
      required : true  ,
      minLength :[3,'must consist of 3 letter']
    },
    capacity:{
      type : Number  ,
      required: true , 
      min : [1,'must have a capacity of 1']
    },
    vehicleType:{
      type :String , 
      required : true , 
      enum : ['bike','auto','car']
    }


  },
  location :{
    lat:{
      type:Number
    },
    long :{
      type:Number
    }
  }



})
captainSchema.methods.generateAuthToken =  function (){
  const token  = jwt.sign({id :this._id},process.env.JWT_SECRET,{expiresIn:'24h'});
  return token  ;
}
captainSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password,this.password) ; 
}
captainSchema.statics.hashedPassword = async function (password){
  return await bcrypt.hash(password,10) ; 
}

const captainModel = mongoose.model('captain',captainSchema)
module.exports = captainModel ; 