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
        return res.view('dashboard', {  accountid: user })
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
     
};

