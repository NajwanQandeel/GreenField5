//requiring the user schema
const UserModel = require('../DataModel').users
//for the hashing password

const bcrypt = require('bcryptjs')
//JWT
const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';
exports.signUpUser =  (req, res) => {
    const Password = req.body.userPass
    const saltRounds = 10
    let data = req.body
  
    UserModel.findOne({ Email: req.body.userMail })
      .then(user => {
        if (user) return res.json({ message: "email already exists" })
  
        bcrypt.genSalt(saltRounds)
          .then((salt) => bcrypt.hash(Password, salt))
          .then((hashedPassword) => {
            data.Password = hashedPassword
            let user = new UserModel(data)
            user.save()
              .then((data) => jwt.sign({ id: data._id }, 'secret', { expiresIn: 90000 }, (err, token) => {
                res.header("jwt-auth", token).json({
                  sucess: true,
                  token: token
                })
              }))
              .catch(err => res.status(404).send(err))
          })
      })
      .catch(err => res.send(err))
  }
  
exports.loginUser = (req, res) => {

   UserModel.findOne({ Email: req.body.userMail })
      .then(data => {
        if (data) {
          bcrypt.compare(req.body.userPass, data.userPass)
            .then(data1 => {
              if (data1) {
                jwt.sign({ id: data._id }, 'secret', { expiresIn: 90000 }, (err, token) => {
                  if (err) return res.json({ message: "err creating the token" })
                  res.header("jwt-auth", token).json({
                    sucess: true,
                    token: token
                  })
                })
              } else {
                throw Error("incorrect password")
              }
            })
        } else {
          throw Error("incorrect email")
        }
      })
      .catch(err => res.status(404).send(err))
  }

//logout to remove token (token value = empty)
exports.userlogout = (req, res) => {
    res.cookie('authToken', '')
    res.status(200).send(req.user)
}

//to check if the user is logged in 
exports.checkuser = (req, res) => { return (req.user) }

//get user info and display it to user profile
exports.getuserinfo = (req, res) => {
    UserModel.findOne({ _id: req.body.id }, (err, userData) => {
        console.log(req.body._id)
        if (err) {
            console.log(err)
            return res.status(500).send('error')
        }
        if (!userData) {
            console.log('user not found')
            return res.status(404).send('not found user')
        }
        else {
            return res.status(200).send(userData)
        }
    })
}



