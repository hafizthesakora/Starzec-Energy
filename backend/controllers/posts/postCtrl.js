const expressAsyncHandler = require('express-async-handler');
const Post = require('../../model/post/Post');
const fs = require('fs');
const validateMongodbId = require('../../utils/validateMongodbID');
const cloudinaryUploadImg = require('../../utils/cloudinary');
const { findById } = require('../../model/user/User');

//create post
const createPostCtrl = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;
  //validateMongodbId(req.body.user.id);
  const localPath = `public/images/posts/${req.file.filename}`;
  const imgUploaded = await cloudinaryUploadImg(localPath);
  try {
    const post = await Post.create({
      ...req.body,
      user: _id,
      image: imgUploaded?.url,
    });
    res.json(post);
    //Remove Uploaded Images
    // fs.unlinkSync(localPath);
  } catch (error) {
    res.json(error);
  }
});

//fetch all posts
const fetchPostsCtrl = expressAsyncHandler(async (req, res) => {
  const hasCategory = req.query.category;
  try {
    //check if has category
    if (hasCategory) {
      const posts = await Post.find({ category: hasCategory }).populate('user');
      res.json(posts);
    } else {
      const posts = await Post.find({}).populate('user');
      res.json(posts);
    }
  } catch (error) {
    res.json(error);
  }
});

const fetchPostCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const post = await Post.findById(id).populate('user');
    //update number of views
    await Post.findByIdAndUpdate(
      id,
      {
        $inc: { numViews: 1 },
      },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

//update a post
const updatePostCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const post = await Post.findByIdAndUpdate(
      id,
      {
        ...req.body,
        user: req.user?._id,
      },
      { new: true }
    );
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

//delete post
const deletePostCtrl = expressAsyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongodbId(id);
  try {
    const post = await Post.findByIdAndDelete(id);
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  createPostCtrl,
  fetchPostsCtrl,
  fetchPostCtrl,
  updatePostCtrl,
  deletePostCtrl,
};
