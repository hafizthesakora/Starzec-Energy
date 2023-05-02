import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../Footer/Footer';
import {
  updatePostAction,
  fetchPostDetailsAction,
} from '../../redux/slices/posts/postSlices';
import CategoryDropdown from '../Categories/CategoryDropdown';

//Form Schema
const formSchema = Yup.object({
  title: Yup.string().required('Title is Required'),
  description: Yup.string().required('Description is Required'),
  category: Yup.object().required('Category is Required'),
});

const UpdateBlog = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  //fetch the post in the url
  useEffect(() => {
    dispatch(fetchPostDetailsAction(id));
  }, [id, dispatch]);

  //select store data
  const postData = useSelector((state) => state?.post);
  const { postDetails } = postData;

  //select store data updated post
  const postUpdate = useSelector((state) => state?.post);
  const { loading, appErr, serverErr, isUpdated } = postUpdate;

  // Initialising Formik
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: postDetails?.title,
      description: postDetails?.description,
      category: '',
    },
    onSubmit: (values) => {
      const data = {
        id,
        title: values?.title,
        description: values?.description,
      };
      //dispatch the action
      dispatch(updatePostAction(data));
      console.log(data);
    },
    validationSchema: formSchema,
  });

  //redirect
  if (isUpdated) return <Navigate to="/blogs" />;

  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            Update Blog
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
                update blog
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
                <span className="text-primary me-2">#</span>Update Blog
              </p>
              <h1 className="display-5 mb-4">
                You are currently editing{' '}
                <span className="text-primary">{postDetails?.title}</span>
              </h1>
              {appErr || serverErr ? (
                <p style={{ color: 'red' }}>
                  {serverErr} {appErr}
                </p>
              ) : null}

              <form onSubmit={formik.handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        value={formik.values.title}
                        onChange={formik.handleChange('title')}
                        onBlur={formik.handleBlur('title')}
                        type="text"
                        className="form-control bg-light border-0"
                        id="firstName"
                        placeholder="Your First Name"
                      />
                      <label for="title">Title</label>
                      {/* ERR MESSAGE */}
                      <span className="text-primary">
                        {formik.touched.title && formik.errors.title}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label>Select Category</label>
                    <CategoryDropdown
                      value={formik.values.category?.label}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.category}
                      touched={formik.touched.category}
                    />
                  </div>

                  <div className="form-floating">
                    <textarea
                      value={formik.values.description}
                      onChange={formik.handleChange('description')}
                      onBlur={formik.handleBlur('description')}
                      className="form-control bg-light border-0"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: '100px' }}
                    ></textarea>
                    <label for="message">Post Description</label>
                    {/* ERR MESSAGE */}
                    <span className="text-primary">
                      {formik.touched.description && formik.errors.description}
                    </span>
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
                        Update Your Post
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

export default UpdateBlog;
