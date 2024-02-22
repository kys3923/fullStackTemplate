const crypto = require('crypto')
const User = require('../model/user')
const ErrorResponse = require('../utils/errorResponse')

exports.register = async (req, res) => {

  const { email, password, confirmPassword } = req.body

  if(!email || !password || !confirmPassword) {
    return res.status(400).json({
      message: 'Required information is missing',
      status: 400
    })
  }

  if(password !== confirmPassword) {
    return res.status(400).json({
      message: 'Passwords do not match'
    })
  }

  try {
    const createdUser = await User.create({
      email,
      password
    })

    return sendToken(createdUser, 201, res)

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'error at creating user in mongoDB'
    })
  }
}

// create - 뭔가를 처음 만들때 ex) DB.create({ keyValue: value })
// read - 뭔가를 하나만 찾을때 ex) DB.findOne({email: emailValue})
// read - 뭔가를 전부 찾을때 ex) DB.find()
// update = 뭔가를 수정할때 ex) DB.findOneAndUpdate({_id: IDvalue}, {updateKeyValue: updatingValue})
// delte - 뭔가를 지울때 ex) DB.findOneAndDelete({_id: IDValue})

// CRUD functions

exports.login = async (req, res) => {
  return console.log(req.body)
}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()
  res.status(statusCode).json({
    success: true,
    token,
    userId: user._id
  })
}