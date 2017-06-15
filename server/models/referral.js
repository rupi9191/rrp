var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//referral Schema
var referralSchema = mongoose.Schema({
    referredBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    referral: {
        name: String,
        email: String,
        phone: Number
    }
});

// referralSchema.methods.createReferral = function(newReferral, callback) {
//     console.log(newReferral);
//     newReferral.save(callback);
// }


var Referral = module.exports = mongoose.model('Referral', referralSchema);

module.exports.createReferral =  function(newReferral, callback) {
    console.log(newReferral);
    newReferral.save(callback);
}
