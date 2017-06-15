var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//Job Listing Schema
var JobListingSchema = mongoose.Schema({
    jobId: {
        type: String,
        index: true
    },
    jobName: {
        type: String
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    createdDate: {
        type: Date
    },
    updatedBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    },
    updatedDate: {
        type: Date
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    jobType: {
          name: String
    },
    skills: {
          id: String,
          name: String,
          category: String
    },
    media: {
          url: String,
          isInternal: String
    }
    point:{
        type:String
    }
    reward:{
        type:Long
    }
});
var JobListing = module.exports = mongoose.model('JobListing',JobListingSchema);
