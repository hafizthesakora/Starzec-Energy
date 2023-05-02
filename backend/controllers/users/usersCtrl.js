const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../../config/token/generateToken');
const User = require('../../model/user/User');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const validateMongodbId = require('../../utils/validateMongodbID');
const cloudinaryUploadImg = require('../../utils/cloudinary');
const fs = require('fs');

// Register
const userRegisterCtrl = expressAsyncHandler(async (req, res) => {
  // check if user exits
  const userExist = await User.findOne({ email: req?.body?.email });
  if (userExist) throw new Error('User already Exists');

  try {
    const user = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      password: req?.body?.password,
    });
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

//Login
const loginUserCtrl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ email });
  // check if password is matched using the function decleard inthe model for every instance
  if (userFound && (await userFound.isPasswordMatched(password))) {
    res.json({
      _id: userFound?._id,
      firstName: userFound?.firstName,
      lastName: userFound?.lastName,
      email: userFound?.email,
      profilePhoto: userFound?.profilePhoto,
      isAdmin: userFound?.isAdmin,
      token: generateToken(userFound?._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Login Credentials');
  }
});

// fetch all users
const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

// fetching user details
const fetchUserDetailsCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
});

// delete a single user
const deleteUserCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  // pasing id from params to validate function to check if its a valid mongodb id
  validateMongodbId(id);
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    res.json(deletedUser);
  } catch (error) {
    res.json(error);
  }
});

// User Profile
const userProfileCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const myProfile = await User.findById(id).populate('posts');
    res.json(myProfile);
  } catch (error) {
    res.json(error);
  }
});

// update user profile
const updateUserCtrl = expressAsyncHandler(async (req, res) => {
  const { _id } = req?.user;
  validateMongodbId(_id);
  const user = await User.findByIdAndUpdate(
    _id,
    {
      // findByIdAndUpdate accepts the Id to find and the items to update the user propertise with that id
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      email: req?.body?.email,
      bio: req?.body?.bio,
    },
    {
      // these are configurations when using findByIdAndUpdate
      new: true,
      runValidators: true,
    }
  );
  res.json(user);
});

// update user password
const updateUserPasswordCtrl = expressAsyncHandler(async (req, res) => {
  //destructure the login user
  const { _id } = req.user;
  const { password } = req.body;
  validateMongodbId(_id);
  //Find the user by _id
  const user = await User.findById(_id);

  if (password) {
    user.password = password;
    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.json(user);
  }
});

// Block a user
const blockUserCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  const user = await User.findByIdAndUpdate(
    id,
    {
      isBlocked: true,
    },
    {
      new: true,
    }
  );
  res.json(user);
});

// unBlock a user
const unBlockUserCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);

  const user = await User.findByIdAndUpdate(
    id,
    {
      isBlocked: false,
    },
    {
      new: true,
    }
  );
  res.json(user);
});

// Generate a token for forget password
const forgetPasswordToken = expressAsyncHandler(async (req, res) => {
  // find the user by email
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not Found');
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const token = await user?.createPasswordResetToken();
    await user.save();

    // build your message
    const resetURL = `Reset your password, <a href="http://localhost:3000/reset-password/${token}">Click to reset your password </a>`;
    const msg = {
      to: email,
      from: 'hafizthesakora@gmail.com',
      subject: 'Reset your password',
      html: resetURL,
    };
    await transporter.sendMail(msg);
    res.json(
      `A verification message is sent to ${user?.email} stating: ${resetURL}`
    );
  } catch (error) {
    res.json(error);
  }
});

//password reset
const passwordResetCtrl = expressAsyncHandler(async (req, res) => {
  const { token, password } = req?.body;
  const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

  // find this user by token
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error('Token Expired, try again later');

  // update or change the password
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();

  res.json(user);
});

// Profile Photo Upload
const profilePhotoUploadCtrl = expressAsyncHandler(async (req, res) => {
  //1. Get the path to upload
  const localPath = `public/images/profile/${req.file.filename}`;
  //2. Upload to cloudinary
  const imgUploaded = await cloudinaryUploadImg(localPath);

  const foundUser = await User.findByIdAndUpdate(
    _id,
    {
      profilePhoto: imgUploaded?.url,
    },
    { new: true }
  );
  // remove the saved images
  fs.unlinkSync(localPath);
  res.json(imgUploaded);
});

module.exports = {
  userRegisterCtrl,
  loginUserCtrl,
  fetchUsersCtrl,
  deleteUserCtrl,
  fetchUserDetailsCtrl,
  userProfileCtrl,
  updateUserCtrl,
  updateUserPasswordCtrl,
  blockUserCtrl,
  unBlockUserCtrl,
  forgetPasswordToken,
  passwordResetCtrl,
  profilePhotoUploadCtrl,
};
