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
        // .then((data)=>{
        //     console.log('jgvhgvh',data);
        //     res.view('dashboard', {  accountid: data })
        // })
            // .then( data => {
            //     console.log('jgvhgvh',data);
            //     res.view('dashboard', {  accountid: data })
            //     // await User.find({})
            //     //     .then(result => {
                 
            //     //         console.log("data", data)
                  
            //     //         res.render('dashboard', {  accountid: data, result: result })
              
            //     //     })
            //         // .catch(err => {
            //         //     console.log(err);
            //         // })
            // })
            catch(err){
                console.log(err);
            }
        
     },


     addUserEmailPage: async (req,res) => {
 
        const id = req.params.id

        
        return res.view('addUserByEmail', {all: id })
        // await Account.find({ where: {accountid: id} }).exec(function(err, result){
        //     console.log('add account page opend',result);
        //     if(err){
        //         return err
        //     }
        //     return res.view('addUserAccount', {articles: result})
        // })
    
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

