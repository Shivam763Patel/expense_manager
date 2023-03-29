/**
 * Account.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const { model } = require("mongoose")

module.exports =
{
  tableName: 'account',
  attributes: 
  {

          accountname:{
  
              type: 'string'
  
          },
  
          accountid:
          {
              model: 'user'
          },


        transactionid:
        {
            collection: 'transaction',
            via: 'transactionid'

      
        }
          

    
    
  },
    
};
  
