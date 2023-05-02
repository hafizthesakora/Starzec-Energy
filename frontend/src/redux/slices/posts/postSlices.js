import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../../utils/baseURL';

//action to redirect
const resetPost = createAction('post/create-reset');
const resetPostEdit = createAction('post/edit-reset');
const resetPostDelete = createAction('post/delete-reset');

//Create Post action
export const createPostAction = createAsyncThunk(
  'post/created',
  async (post, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call
      const formData = new FormData();
      formData.append('title', post?.title);
      formData.append('description', post?.description);
      formData.append('category', post?.category);
      formData.append('image', post?.image);

      const { data } = await axios.post(
        `${baseURL}/api/posts`,
        formData,
        config
      );
      dispatch(resetPost());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Update Post action
export const updatePostAction = createAsyncThunk(
  'post/updated',
  async (post, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call

      const { data } = await axios.put(
        `${baseURL}/api/posts/${post?.id}`,
        post,
        config
      );
      //dispatch
      dispatch(resetPostEdit());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Delete Post action
export const deletePostAction = createAsyncThunk(
  'post/deleted',
  async (postId, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };
    try {
      //http call

      const { data } = await axios.delete(
        `${baseURL}/api/posts/${postId}`,
        config
      );
      dispatch(resetPostDelete());
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Fetch all Post action
export const fetchPostsAction = createAsyncThunk(
  'post/fetch',
  async (category, { rejectWithValue, getState, dispatch }) => {
    try {
      //http call
      const { data } = await axios.get(
        `${baseURL}/api/posts?category=${category}`
      );
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//Fetch Post Details action
export const fetchPostDetailsAction = createAsyncThunk(
  'post/details',
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      //http call
      const { data } = await axios.get(`${baseURL}/api/posts/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slices
const postSlice = createSlice({
  name: 'post',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(createPostAction.pending, (state, action) => {
      state.loading = true;
    });
    //dispatch action reset
    builder.addCase(resetPost, (state, action) => {
      state.isCreated = true;
    });
    builder.addCase(createPostAction.fulfilled, (state, action) => {
      state.postCreated = action?.payload;
      state.isCreated = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createPostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //update post action
    builder.addCase(updatePostAction.pending, (state, action) => {
      state.loading = true;
    });
    //dispatch action reset
    builder.addCase(resetPostEdit, (state, action) => {
      state.isUpdated = true;
    });
    builder.addCase(updatePostAction.fulfilled, (state, action) => {
      state.postUpdated = action?.payload;
      state.isUpdated = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updatePostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //delete post action
    builder.addCase(deletePostAction.pending, (state, action) => {
      state.loading = true;
    });
    //dispatch action reset
    builder.addCase(resetPostDelete, (state, action) => {
      state.isDeleted = true;
    });
    builder.addCase(deletePostAction.fulfilled, (state, action) => {
      state.postDeleted = action?.payload;
      state.isDeleted = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deletePostAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch posts
    builder.addCase(fetchPostsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPostsAction.fulfilled, (state, action) => {
      state.postLists = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch post details
    builder.addCase(fetchPostDetailsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPostDetailsAction.fulfilled, (state, action) => {
      state.postDetails = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchPostDetailsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default postSlice.reducer;
