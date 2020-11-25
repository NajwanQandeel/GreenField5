//to use process.env for deployment(check .env file!)
const dotenv = require('dotenv')
dotenv.config()
//for mongo db 
const mongoose = require('mongoose');
//(check .env file!)
mongoose.connect(process.env.DB_CONNECT, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true })
var db = mongoose.connection
//to check if there is a connection with db or not 
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log('connection to db sucessful')
})
//Schemas
let tripsSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    // feeds: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'feedback' }],
    image: [[String]],
    tripType: String,
    name: String,
    explore: String,
    price: String,
    date: Date,
    deadLine: Date,
    tripGuide: String,
    maximumNumPerTrip: Number,
    idOfTourist: [String],
    discription: {
        type: Object
    },
})
let userSchema = mongoose.Schema({
    id: { type: Number, unique: true, sparse: true },
    userName: String,
    userMail: { 
        type: String, required: [true, 'Please enter your email']
      },
    userPass: {
        type: String, required: [true, 'Please enter your password'],
        minlength: [8, 'Minimum password length is 8 characters']
    },
    userNum: String,
    trips: [String],
    userimage: String,
    newsLetter: Boolean
})

let paymentSchema = mongoose.Schema({
    id: { type: Number, unique: true },
    creditCard: Number,
    cvv: Number,
    exDate: Date
})

let feedbackSchema = mongoose.Schema({
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trips'
    },
    userMail:{
        type:String,
    },
    userName: String,
    feedback:String
})


let trips = mongoose.model("tripsinfo", tripsSchema);
let users = mongoose.model("userinfo", userSchema);
let payment = mongoose.model("paymentinfo", paymentSchema)
let feedback = mongoose.model("feedback", feedbackSchema);

module.exports.users = users
module.exports.payment = payment
module.exports.feedback = feedback
module.exports.trips=trips