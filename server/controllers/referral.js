var Referral = require('../models/referral');

var referralCtrl = {};

referralCtrl.newReferral = function(req, res) {
    const {
        referral
    } = req.body;
    console.log("refer:",req.user);

    const newReferral = new Referral({
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

// Create endpoint /api/jobs
referralCtrl.getReferrals = function(req, res) {
    Referral.find(null,'-__v',function(err, referrals) {
        if (err)
        res.send(err);

        res.json(referrals);
    });

};

module.exports = referralCtrl;
