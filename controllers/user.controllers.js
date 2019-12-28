const key = require("../keys")
const jwt = require("jsonwebtoken")

//login user data w google
const userRedirect = (req, res) => {
    const payload = {
        id: req.user.id,
        username: req.user.username,
        avatarPicture: req.user.avatarPath,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        favItins: req.user.favItins
    };
    const options = {expiresIn: 600};
    
    jwt.sign(
    payload,
    key.secretOrKey,
    options,
    (err, token) => {
        if(err){
         return res.json({
            payload:payload,
            success: false,
            token: "There was an error",
        });
        }else {
            res.redirect(`http://localhost:3000/profile/${token}`) 
        }
    }
    )
};

module.exports = { userRedirect }