const express = require ('express') ; 
const router = express.Router() ;  
const {body} = require('express-validator')  ; 
const userController = require('../controller/user.controller') ; 


router.post('/register',
  [body('email').isEmail().withMessage("Invalid Email"),
   body('fullname.firstname').isLength({min:3}).withMessage("Firstname should be atleast 3 letter long"),
   body('password').isLength({min:6}).withMessage("password should atleast 6 character long") 
  ],
  userController.registerUser)

  router.post('/login',
    [body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage("password must 6 character long")
    ],
    userController.loginUser)

  module.exports = router ; 