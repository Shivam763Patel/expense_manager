/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcryptjs = require("bcrypt")

module.exports = {

    
    addUserAccount: async (req,res) => {

            const  user = await Account.create(
            {
                
                accountname: req.body.accountname
            })
        
            .fetch()
            .then(result => {
                console.log(result)
                
                res.redirect('/dashboarduser')
        
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    err: err.message
                })
            })
        },

        editUserAccountpage: async (req,res) => {
 
            const id = req.params.id
     
            await Account.findOne({id: id}).exec(function(err, result){
                console.log(result);
                if(err){
                    return err
                }
                return res.view('editUserAccount', {articles: result})
            })
        
        },
        

    }
