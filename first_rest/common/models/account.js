'use strict';
module.exports = function(Account) {
    
    Account.validatesLengthOf('accno', {min: 3, message: {min: 'Password is too short'}});

};

