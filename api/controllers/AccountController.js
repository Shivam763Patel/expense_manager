/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    info_account: async function (req, res) {
        const userid = req.query.userid
        console.log("userid", userid);
        await Account.find({ userid: userid })
            .then(async data => {
                await User.find({})
                    .then(result => {
                 
                        console.log("data", data)
                  
                        res.render('dashboard', {  accountid: data, result: result })
                        console.log(accountid)
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch(err => {
                console.log(err);
            })
     },
     
};

