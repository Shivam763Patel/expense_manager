/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const bcryptjs = require("bcrypt")

module.exports = {

    
    // addUserAccount: async (req,res) => {
 
    //         const id = req.params.id
     
    //         await Account.findOne({id: id}).exec(function(err, result){
    //             console.log(result);
    //             if(err){
    //                 return err
    //             }
    //             return res.view('addUserAccount')
    //         })
        
        
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
        // },

     

        addUserAccountPage: async (req,res) => {
 
            const id = req.params.id
            return res.view('addUserAccount', {all: id})
            // await Account.find({ where: {accountid: id} }).exec(function(err, result){
            //     console.log('add account page opend',result);
            //     if(err){
            //         return err
            //     }
            //     return res.view('addUserAccount', {articles: result})
            // })
        
        },
        
           //Add user to account by name

           addUserAccount: async(req,res) => {

            console.log('for add user')
            const accountname= req.body.accountname
            const id = req.params.id
            console.log("for add account id", id)
            await Account.create({

                accountid: id ,
                accountname: accountname
            })
            .fetch()
            .then(result => {
                console.log("added data", result)
                console.log('add user',req.user.userid)
                const id = req.user.userid
                // return res.view('dashboard', {all: id})
                return res.redirect(`/dashboarduser/${id}`)
            
            })
        },
        
        editUserAccountpage: async (req,res) => {
 
            const id = req.params.id
     
            await Account.findOne({id: id}).exec(function(err, result){
                console.log(result);
                if(err){
                    return err
                }
                const acc = result.accountid
                return res.view('editUserAccount', {articles: result, all: acc })
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


    //Delete account for user
    deleteUserAccount: async (req, res) => {
        const id = req.params.id
     
        await Account.destroy({ id: id })
            .then(result => {
                const deleteuserid = req.user.userid
                return res.redirect(`/dashboarduser/${deleteuserid}`)
         
            })
    },


    }
