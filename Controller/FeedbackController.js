const UserModel = require('../DataModel').feedback


exports.addFeedback = async (req, res) => {
    // Feedback Data
    userMail = req.body.userMail
    UserModel.find({}, (err, feedback) => {

        var newFeedback = new UserModel()
        newFeedback.tripId = req.body.tripId
        newFeedback.userName = req.body.userName
        newFeedback.userMail = req.body.userMail
        newFeedback.feedback = req.body.feedback
        newFeedback.save((err, saveduse) => {
            if (err) {
                res.status(400).json({ 'error': err })
            }
            res.status(201).json('sucessfully')
        })
    })
}


exports.FindAllFeedByIdOfTrip = (req, res) => {
    console.log("dddddddd");
    UserModel.find(req.body.tripId)
        .populate({ path: 'tripId', model: UserModel })
        .exec((err, feeds) => {
            if (err) { console.log(err) ; res.status(404).send({ err }).end()}
 
            else {
                console.log("not success");  res.status(200).send({feeds}).end()
            }
        })
}
