import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import baseURL from '../../../utils/baseURL';

//action to redirect
const resetEditAction = createAction('category/edit-reset');
const resetDeleteAction = createAction('category/delete-reset');
const resetCategoryAction = createAction('category/new-reset');

//Action

export const createCategoryAction = createAsyncThunk(
  'category/create',
  async (category, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };

    //http call
    try {
      const { data } = await axios.post(
        `${baseURL}/api/category`,
        {
          title: category?.title,
        },
        config
      );
      //dispatch reset action
      dispatch(resetCategoryAction());
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// fetch all categories
export const fetchCategoriesAction = createAsyncThunk(
  'category/fetch',
  async (category, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };

    //http call
    try {
      const { data } = await axios.get(`${baseURL}/api/category`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//update category
export const updateCategoryAction = createAsyncThunk(
  'category/update',
  async (category, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };

    //http call
    try {
      const { data } = await axios.put(
        `${baseURL}/api/category/${category?.id}`,
        { title: category?.title },
        config
      );
      //dispatch action to reset the updated data
      dispatch(resetEditAction());
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//delete category
export const deleteCategoryAction = createAsyncThunk(
  'category/delete',
  async (id, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };

    //http call
    try {
      const { data } = await axios.delete(
        `${baseURL}/api/category/${id}`,
        config
      );
      //dispatch delete reset
      dispatch(resetDeleteAction());
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//fetch details of a  category
export const fetchCategoryDetailsAction = createAsyncThunk(
  'category/deails',
  async (id, { rejectWithValue, getState, dispatch }) => {
    //get user token
    const user = getState()?.users;
    const { userAuth } = user;
    const config = {
      headers: {
        Authorization: `Bearer ${userAuth?.token}`,
      },
    };

    //http call
    try {
      const { data } = await axios.get(`${baseURL}/api/category/${id}`, config);
      return data;
    } catch (error) {
      if (!error?.response) {
        throw error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

//slices
const categorySlices = createSlice({
  name: 'category',
  initialState: {},
  extraReducers: (builder) => {
    builder.addCase(createCategoryAction.pending, (state, action) => {
      state.loading = true;
    });
    //dispatch action to redirect
    builder.addCase(resetCategoryAction, (state, action) => {
      state.isCreated = true;
    });
    builder.addCase(createCategoryAction.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action?.payload;
      state.isCreated = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(createCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch all categories
    builder.addCase(fetchCategoriesAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoriesAction.fulfilled, (state, action) => {
      state.categoryList = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchCategoriesAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //update category
    builder.addCase(updateCategoryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetEditAction, (state, action) => {
      state.isEdited = true;
    });
    builder.addCase(updateCategoryAction.fulfilled, (state, action) => {
      state.updateCategory = action?.payload;
      state.isEdited = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(updateCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //delete category
    builder.addCase(deleteCategoryAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(resetDeleteAction, (state, action) => {
      state.isDeleted = true;
    });
    builder.addCase(deleteCategoryAction.fulfilled, (state, action) => {
      state.deleteCategory = action?.payload;
      state.isDeleted = false;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(deleteCategoryAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });

    //fetch a category
    builder.addCase(fetchCategoryDetailsAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchCategoryDetailsAction.fulfilled, (state, action) => {
      state.category = action?.payload;
      state.loading = false;
      state.appErr = undefined;
      state.serverErr = undefined;
    });
    builder.addCase(fetchCategoryDetailsAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default categorySlices.reducer;
