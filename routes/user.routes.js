const userController = require ('../controllers/user.controllers')
const router = require ('express').Router()
const passport = require('../passport')

//Google auth login:
router.get("/auth/google", passport.authenticate('google', // first param: strategy (passport knows it)
        {scope: ['profile']}, //second param: google info wanted
        {session: false }
    ));
//google callback route (JWT)
router.get("/auth/google/redirect", passport.authenticate('google',{ session: false }), userController.userRedirect); 


module.exports = router