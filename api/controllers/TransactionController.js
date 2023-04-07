/**
 * TransactionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    

    //GET: Page for add transcation to account
    addTransactionPage: async (req,res) =>
    {
 
        const id = req.params.id
        console.log('data',id)
    await Account.findOne({id: id}).exec(function(err, result){
        console.log('data',result);
        if(err){
            return err
        }
    
        const acc = result.accountid
        return res.view('addTransaction', {articles: result, all: acc})
    })

    },

    //POST: Add transcation data into account

    addTransaction: async(req,res) => {

        console.log('data add tr')
        const id = req.params.id
        console.log("for add transaction id", id)

            console.log('for transaction into account')
          
            await Transaction.create({

                transactionid: id ,
                accountName: req.body.accountName,
                accountType:  req.body.accountType,
                transactionAmount: req.body.transactionAmount,
                transactionDate: req.body.transactionDate
            })
            .fetch()
            .then(result => {
                console.log("added data", result)
               
                // const id = result.transactionid
                console.log(id)
                return res.redirect(`/dashboarduser/tr/${id}`)
            
            })
        },

        viewTranscation: async function (req, res) {
            try{
            const uuserid = req.params.id 

            console.log("userid ", uuserid);
         
      
            const user = await Transaction.find({ where: {transactionid: uuserid} }).sort([
                { createdAt: 'DESC' },
              ]);


         const { page=0 , limit=10} = req.query
    
            // const pagedata = await Transaction.find({}).skip(skip*limit).limit(limit)
              
            if (page && limit) {
        const result = await Transaction.find({}).limit(limit*1).skip(page * limit)
            
              const id = req.user.userid
              console.log('data new',id)
            return res.view('transactionPage', {  transactionid: user , all: id })
            
        
    }
}
                catch(err){
                    console.log(err);
                }
            
         },


         //GET: Edit transcation page

         editUserTransactionpage: async (req,res) => {
 
            const id = req.params.id
     
            await Transaction.findOne({id: id}).exec(function(err, result){
                console.log(result);
                if(err){
                    return err
                }
                

                const data = result.transactionid
                console.log('transaction id',data)
                return res.view('editUserTransaction', {articles: result, all: data })
            })
        
        },

        editUserTransaction: async(req,res) => {

        
            const id = req.params.id
            console.log("Updated id", id)
            await Transaction.updateOne( {
        
                id: id
            },
            {
                accountName: req.body.accountName

            }
            )
            .fetch()
            .then(result => {
                console.log("Updated data", result)
       
                const edituserid = result.transactionid
                console.log(edituserid)
              
                return res.redirect(`/dashboarduser/tr/${edituserid}`)
           
            })
        },

            //Delete account for user
        deleteUserTranscation: async (req, res) => {
        const id = req.params.id
     
        await Transaction.destroy({ id: id })
            .then(result => {
                const deleteuserid = req.user.userid
                return res.redirect(`/dashboarduser/tr/${deleteuserid}`)
                
            })
    },
}

