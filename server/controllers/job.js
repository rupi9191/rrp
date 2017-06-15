var Job = require('../models/job');

var jobCtrl = {};

jobCtrl.newJob = function(req, res) {
    const {
        skills,
        name
    } = req.body;

    const newJob = new Job({
        createdBy: req.user,
        skills: skills,
        name
    });

    Job.createJob(newJob,function(err, job){
        if (err) {
             res.json({"error": "error saving Job"});
        } else {
            res.json(job);
        }
    });
};
// Create endpoint /api/jobs
jobCtrl.getJobs = function(req, res) {
    Job.find(null,'-__v',function(err, jobs) {
        if (err)
        res.send(err);

        res.json(jobs);
    });

};


module.exports = jobCtrl;
