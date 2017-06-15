var JobListing = require('../models/job');

var jobListing = {};

jobListing.newJobListing = function(req, res) {
    const {
        jobListing
    } = req.body;
    console.log("refer:",req.user);

    const newJobListing = new newJobListing({
        referredBy: req.user,
        referral: {
            name: referral.name,
            email: referral.email,
            phone: referral.phone
        }
    });

    Referral.createReferral(newReferral,function(err, referral){
        if (err) {
             res.json({"error": "error saving referral"});
        } else {
            res.json(referral);
        }
    });
};

module.exports = referralCtrl;
