/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */



module.exports = {
  
    info_account: async function (req, res) {
        try{
        const userid = req.params.id
        console.log("userid", userid);
        
        const user = await Account.find({ where: {accountid: userid} })
 
        
        console.log('ghfchvgh',user);
        return res.view('dashboard', {  accountid: user, all: userid })
        }

            catch(err){
                console.log(err);
            }
        
     },


     addUserEmailPage: async (req,res) => {
 
        const id = req.params.id

        const data = req.user.userid
        console.log('data user id',data)
        return res.view('addUserByEmail', {all: id , allnew: data})

    
    },
     

           //Add user to account by Email

           addUserEmail: async(req,res) => {

            console.log('for add user by email')
            const email= req.body.email
            const id = req.params.id
            console.log('user id',id)
            console.log("for add user by email into account id", id)



             const user = await User.find({

                email: email
            })
            console.log('user data',user)
            const usernew = user[0].id
            console.log('user id for acc',usernew)
            await Account.addToCollection(id, 'emailAccountid', usernew)
            .then(result => {
                console.log("added data", result)
                console.log('add user',req.user.userid)
                const id = req.user.userid
                // return res.view('dashboard', {all: id})
                return res.redirect(`/dashboarduser/${id}`)
            
            })
        },
        
};

