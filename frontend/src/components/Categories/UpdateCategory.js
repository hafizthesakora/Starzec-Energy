import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Footer from '../Footer/Footer';
import {
  fetchCategoryDetailsAction,
  updateCategoryAction,
  deleteCategoryAction,
} from '../../redux/slices/category/categorySlice';

//Form Schema
const formSchema = Yup.object({
  title: Yup.string().required('Title is Required'),
});

const UpdateCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  // fetch single category
  useEffect(() => {
    dispatch(fetchCategoryDetailsAction(id));
  }, [dispatch, id]);

  //get data from store
  const state = useSelector((state) => state?.category);

  const { loading, appErr, serverErr, category, isEdited, isDeleted } = state;

  // Initialising Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: category?.title,
    },
    onSubmit: (values) => {
      //build up the data for update

      //dispatch the action
      dispatch(updateCategoryAction({ title: values?.title, id }));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  if (isEdited || isDeleted) {
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
            Update Category
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
                update-category
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
                Update a Category to Select when Making a Post
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
                        placeholder="Update Category"
                      />
                      <label for="category">Update Category</label>
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
                      <>
                        <button
                          className="btn btn-primary w-100 mb-3 py-3"
                          type="submit"
                        >
                          Update Category
                        </button>
                        <button
                          className="btn btn-primary w-100 py-3"
                          onClick={() => dispatch(deleteCategoryAction(id))}
                        >
                          Delete Category
                        </button>
                      </>
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

export default UpdateCategory;
