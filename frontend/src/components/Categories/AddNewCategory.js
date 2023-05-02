import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Footer from '../Footer/Footer';
import { createCategoryAction } from '../../redux/slices/category/categorySlice';

//Form Schema
const formSchema = Yup.object({
  title: Yup.string().required('Title is Required'),
});

const AddNewCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialising Formik
  const formik = useFormik({
    initialValues: {
      title: '',
    },
    onSubmit: (values) => {
      //dispatch the action
      dispatch(createCategoryAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  //get data from store
  const state = useSelector((state) => state?.category);

  const { loading, appErr, serverErr, isCreated } = state;
  //Redirect
  if (isCreated) {
    navigate('/category-list');
  }
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            Add New Category
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item">
                <a className="text-white" href="/">
                  Pages
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                add-category
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <p>
                <span className="text-primary me-2">#</span>add-category
              </p>
              <h1 className="display-5 mb-4">
                Add a New Category to Select when Making a Post
              </h1>

              <p className="text-primary mb-4">
                {appErr || serverErr ? (
                  <div>
                    {serverErr} {appErr}
                  </div>
                ) : null}
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        value={formik.values.title}
                        onChange={formik.handleChange('title')}
                        onBlur={formik.handleBlur('title')}
                        type="text"
                        className="form-control bg-light border-0"
                        id="category"
                        placeholder="Add New Category"
                      />
                      <label for="category">Add New Category</label>
                      {/* ERR MESSAGE */}
                      <span className="text-primary">
                        {formik.touched.title && formik.errors.title}
                      </span>
                    </div>
                  </div>

                  <div className="col-12">
                    {loading ? (
                      <button className="btn btn-primary w-100 py-3" disabled>
                        Loading Please wait...
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Add New Category
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Contact End --> */}

      <Footer />
    </div>
  );
};

export default AddNewCategory;
