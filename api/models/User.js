/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt')

module.exports = {

    tablename: 'user',
    attributes:
    {

        
        email:
        {
            type:'string',
            isEmail: true,
            unique: true

        },
      
        password:
        {
            type: 'string',
            minLength: 8


        },

        accountid: {
            collection: 'account',
            via: 'accountid'
        },

        userAccountid:
        {
              model: 'account'
        }

      
    },


    beforeCreate: function(values, cb) {
        // Hash password
        bcrypt.hash(values.password, 10, function(err, hash) {
            if (err) return cb(err);
        
            values.password = hash;
     
            cb();
        });
    },
}

