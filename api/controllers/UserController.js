/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcryptjs = require("bcrypt")

module.exports = {

    
    addUserAccount: async (req,res) => {
 
            const id = req.params.id
     
            await Account.findOne({id: id}).exec(function(err, result){
                console.log(result);
                if(err){
                    return err
                }
                return res.view('addUserAccount')
            })
        
        
        // const id = req.params.id

        // await Account.findOne({id: id}).create(
        //     {
                
        //         accountname: req.body.accountname
        //     })
        //     return res.view('/dashboarduser')
        //     .catch(err => {
        //         console.log(err);
        //         res.status(500).json({
        //             err: err.message
        //         })
        //     })
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

        editUserAccount: async(req,res) => {

            const accountname = req.body.accountname
            console.log("Account name is", accountname)
            const id = req.params.id
            console.log("Updated id", id)
            await Account.update( {
        
                id: id
            },
            {
                accountname: accountname    

            }
            )
            .fetch()
            .then(result => {
                console.log("Updated data", result)
                console.log('edit user',req.user.userid)
                const edituserid = req.user.userid
                return res.redirect(`/dashboarduser/${edituserid}`)
            
            })
        },

        //Add user to account by name

        addUserAccountData: async (req,res) => {

            const  user = await Account.create(
            {
                
                accountname: req.body.accountname
            })
        
            .fetch()
            .then(result => {
                console.log(result)
                const adduserid = req.user.userid
                return res.redirect('/dashboarduser/${adduserid}')
        
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    err: err.message
                })
            })
        },
        

    }
