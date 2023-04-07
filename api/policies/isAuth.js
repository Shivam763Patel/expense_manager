const jwt = require("jsonwebtoken")
const User = require("../models/User")
module.exports = async (req,res,proceed) => {

      
         try
                {
                    const token  = req.cookies.tokenall
                    console.log(token)
             
                    const jwt_secret=process.env.JWT_KEY || 'secret'
                    console.log('jwt data',jwt_secret)
             
                    const decoded = jwt.verify(token,jwt_secret)
                    console.log('auth data',decoded)
          

                    if(decoded) {
                      
                        req.user= decoded

                        proceed()
                     
                    
                    }
                    else{
                        return  res.status(401).send({
                            message: 'Please Login for dashboard again'
                           
                    })
                    }
                }
                catch(err)
                {
                   
                        console.log(err)
                        return res.status(401).send({
                            message: "Please Login again new new"
                    })
                    
                    
                }
    

   
}