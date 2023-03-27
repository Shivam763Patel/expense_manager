const jwt = require("jsonwebtoken")
const User = require("../models/User")
module.exports = async (req,res,next) => {

    if(req.token)
    {
        const jwt_secret = process.env.JWT_KEY || 'secret'
        try
        {

            var decoded = jwt.verify(token,jwt_secret)
       
            if(decoded) {
                const user  = await User.find({ email: decoded.data.email, userid: decoded.data.user.id}  );
                req.user = user
                console.log(req.user)
                next()
                return res.redirect('/login')
            }
  
            else{
                return  res.status(401).send({
                    message: 'Please Login again'
                   
            })
            }
        }
    
  catch(err) {
    console.log(err);
    res.status(500).json(
        {

            error: err
        }
    )
}
    }
}