const captainModel = require('../models/captain.model');
const {validationResult} = require('express-validator') ; 
const captainService = require('../services/captain.services') ;

module.exports.registerCaptain = async(req,res,next)=>{
const errors = validationResult(req) ; 

if(!errors.isEmpty()){
   return res.status(400).json({errors:errors.array()}) ; 
}
  const {fullname,email,password,vehicle} = req.body ; 
   const isCaptainExist = await captainModel.findOne({email}) ; 
    if(isCaptainExist){
      return res.status(400).json({message:'Captain already exists'}) ;
    }
  const hashedPassword = await captainModel.hashedPassword(password) ;
const captain = await captainService.createCaptain({
  
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
    plate: vehicle.plate,
    color: vehicle.color,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType
  
});
  const token = captain.generateAuthToken() ;
  res.status(201).json({token , captain}) ;
}