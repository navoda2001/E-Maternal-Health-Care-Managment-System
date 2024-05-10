const router = require('express').Router();
let feedback_Schema = require('../models/feedback');

router.route('/addFeedback').post((req, res) => {
 
    const rate = req.body.rate;
    const feedback = req.body.feedback;               
    const email = req.body.email;
    const uniqueId = req.body.uniqueId;

    const feedbacks = new feedback_Schema({  rate, feedback, email, uniqueId});
    
    feedbacks.save()
        .then(() => res.json('FeedBack Add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/allFeedbacks").get(async (req, res) => {
    feedback_Schema.find()
        .then(feedbacks => res.json(feedbacks))
        .catch(err => res.status(400).json('No Data'))
});



module.exports = router;