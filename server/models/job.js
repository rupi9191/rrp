var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Job Listing Schema
var JobSchema = mongoose.Schema({
    name: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    skills:[{type: String}]
});
var JobListing = module.exports = mongoose.model('Jobs',JobSchema);
module.exports.createJob =  function(newJob, callback) {
    console.log(newReferral);
    newJob.save(callback);
}
