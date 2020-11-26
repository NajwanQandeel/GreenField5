const FavoriteModel = require('../DataModel').Favorite
const tripsData = require('../Data/trips.json')

exports.Favorited = async (req, res) => {
    FavoriteModel.find({ "userId":req.body.userId,"tripId":req.body.tripId})
        .exec(( err, favorite) => {
            if(err) return res.status(400).send(err)
            
            //How can we know if I already favorite this trip or not ? 
            let result = false;
            if(favorite.length !== 0) {
                result = true
            }
            
            res.status(200).json({ success: true, favorited: result});
            
        })
}


exports.addToFavorite=async (req,res)=>{

    // Save the information about the movie or user Id  inside favorite collection 
    var newFavorite = new FavoriteModel()
    newFavorite.userId=req.body.userId;
    newFavorite.tripId=req.body.tripId;
    // newFavorite.tripName=req.body.tripName;
    // newFavorite.tripImage=req.body.tripImage;

 
    newFavorite.save((err, saveduse) => {
        if (err)return res.json({ success: false, err })
        return res.status(200).json({ success: true })
    })

}
exports.removeFromFavorite=async (req,res)=>{

    // Save the information about the movie or user Id  inside favorite collection 
    FavoriteModel.findOneAndDelete({ userId:req.body.userId,tripId:req.body.tripId})
    .exec((err, doc) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, doc })
    })

}
exports.favoritedtrips=async (req,res)=>{

    // Save the information about the movie or user Id  inside favorite collection 
    FavoriteModel.find(req.body.userId)
    .exec((err, doc) => {
        if (err) return res.status(400).json({ success: false, err })
        res.status(200).json({ success: true, doc })
    })

}
// exports.getFavTrip=async (req,res)=>{

//     // Save the information about the movie or user Id  inside favorite collection 
//     FavoriteModel.findOne(req.body.tripId)
//     .exec((err, doc) => {
//         if (err) return res.status(400).json({ success: false, err })
//         res.status(200).json({ success: true, doc })
//     })

// }







   