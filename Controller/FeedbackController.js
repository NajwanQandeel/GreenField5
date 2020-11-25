const UserModel = require('../DataModel').feedback


exports.addFeedback = async (req, res) => {
    // Feedback Data
    userMail = req.body.userMail
    UserModel.findOne({ userMail: req.body.userMail }, (err, feedback) => {
        if (err) {
            console.log(err)
            return res.status(400).send('error')
        }
        var newFeedback = new UserModel()
        newFeedback.tripId=req.body.tripId
        newFeedback.userName = req.body.userName
        newFeedback.userMail = req.body.userMail
        newFeedback.feedback = req.body.feedback
        newFeedback.save((err, saveduse) => {
            if (err) {
                res.status(400).json({ 'error': err })
                res.status(201).json('sucessfully')
            }
        })
    })
}

exports.FindAllFeedByIdOfTrip= async(req,res) => {
    UserModel.find({},(err, feeds) => {
        if (err)
            res.send(err);
        res.json(feeds);
    });
}
// exports.FindAllFeedByIdOfTrip = (req, res) => {
//     UserModel.find({ tripId: req.body.tripId})
//       .populate('tripId')
//       .exec((err, feeds) => {
//         if (err) return res.status(404).json({ success: false })
//         res.json(feeds)
//       })
//     }
   