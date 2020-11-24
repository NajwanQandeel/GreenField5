const FavoriteModel = require('../DataModel').Favorite

exports.addtoFavorite = async (req, res) => {
    // Feedback Data
    // userFrom=req.body.usreFrom;
    // FavoriteModel.findOne({ userFrom:req.body.usreFrom}, (err, feedback) => {
    //     if (err) {
    //         console.log(err)
    //         return res.status(400).send('error')
    //     }
        var newFavorite = new FavoriteModel()
        newFavorite.userFrom=req.body.usreFrom;
        newFavorite.tripId=req.body.tripId;
     
        newFavorite.save((err, saveduse) => {
            if (err) {
                res.status(400).json({ 'error': err })
                res.status(201).json('sucessfully')
            }
        })
  
}