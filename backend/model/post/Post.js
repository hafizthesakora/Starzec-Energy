const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Post title is required'],
      trim: true,
    },
    //Created by only admin
    category: {
      type: String,
      required: [true, 'Post category is reqired'],
    },
    numViews: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Post author is required'],
    },
    description: {
      type: String,
      required: [true, 'Post description is required'],
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//compile
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
