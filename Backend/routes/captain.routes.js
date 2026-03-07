const express = require ('express') ; 
const router = express.Router() ; 
const {body} = require('express-validator') ; 
const captainController = require('../controller/captain.controller')
const authMiddleware = require('../middleware/auth.middleware')

router.post('/register',
   [body('email').isEmail().withMessage("Invalid Email"),
     body('fullname.firstname').isLength({min:3}).withMessage("Firstname should be atleast 3 letter long"),
     body('password').isLength({min:6}).withMessage("password should atleast 6 character long"), 
     body('vehicle.plate').isLength({min:3}).withMessage("Enter vehicle no:"),
     body('vehicle.capacity').isLength({min:1}).withMessage("minimum capacity should be 1"),
     body('vehicle.color').isLength({min:3}).withMessage("color should be atleast 3 character long"),
     body('vehicle.vehicleType').isIn(['car','auto','bike']).withMessage("Invalid Type")

    ],
  captainController.registerCaptain)

  router.post('/login',
    [body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("password should atleast 6 character long")
    ],captainController.loginCaptain)

  router.get('/profile',authMiddleware.authCaptain ,captainController.getProfileCaptain) ; 

  router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)


module.exports = router ; 