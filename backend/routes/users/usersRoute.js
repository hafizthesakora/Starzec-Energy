const express = require('express');
const {
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
} = require('../../controllers/users/usersCtrl');
const authMiddleware = require('../../middlewares/auth/authMiddleware');
const {
  photoUpload,
  profilePhotoResize,
} = require('../../middlewares/uploads/photoUpload');
const userRoutes = express.Router();

userRoutes.post('/register', userRegisterCtrl);
userRoutes.post('/login', loginUserCtrl);
userRoutes.post('/forget-password-token', forgetPasswordToken);
userRoutes.put('/reset-password', passwordResetCtrl);
userRoutes.get('/', authMiddleware, fetchUsersCtrl); // passed in the middleware to verify token and attch user to request before getting to the server.
userRoutes.get('/:id', fetchUserDetailsCtrl);
userRoutes.get('/profile/:id', authMiddleware, userProfileCtrl); // this is same as getting user details but only logged in users can access this
userRoutes.delete('/:id', deleteUserCtrl);
userRoutes.put('/password', authMiddleware, updateUserPasswordCtrl);
userRoutes.put(
  '/profilePhoto-upload',
  authMiddleware,
  photoUpload.single('image'),
  profilePhotoResize,
  profilePhotoUploadCtrl
);
userRoutes.put('/:id', authMiddleware, updateUserCtrl);
userRoutes.put('/block-user/:id', authMiddleware, blockUserCtrl);
userRoutes.put('/unblock-user/:id', authMiddleware, unBlockUserCtrl);

module.exports = userRoutes;
