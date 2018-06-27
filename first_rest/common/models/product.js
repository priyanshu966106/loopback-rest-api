'use strict';

module.exports = function(Product) {
 Product.validatesLengthOf('pname', {min: 3, message: {min: 'Password is too short'}});
};
