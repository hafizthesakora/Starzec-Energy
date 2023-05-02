import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import Footer from '../Footer/Footer';
import { registerUserAction } from '../../redux/slices/users/usersSlices';

//Form Schema
const formSchema = Yup.object({
  firstName: Yup.string().required('First Name is Required'),
  lastName: Yup.string().required('Last Name is Required'),
  email: Yup.string().required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialising Formik
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      //dispatch the action
      dispatch(registerUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  //select state from store
  const storeData = useSelector((store) => store?.users);
  const { loading, appErr, serverErr, registered } = storeData;

  //redirect
  if (registered) {
    return navigate('/login');
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
            Register
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
                Register
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
                <span className="text-primary me-2">#</span>Register
              </p>
              <h1 className="display-5 mb-4">Have Any Passion? Join Us Now!</h1>
              <p className="mb-4">
                The contact form is currently inactive. Get a functional and
                working contact form with Ajax & PHP in a few minutes. Just copy
                and paste the files, add a little code and you're done.
              </p>
              <p className="text-primary mb-4">
                {appErr || serverErr ? (
                  <div>
                    {' '}
                    {serverErr} {appErr}{' '}
                  </div>
                ) : null}
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        value={formik.values.firstName}
                        onChange={formik.handleChange('firstName')}
                        onBlur={formik.handleBlur('firstName')}
                        type="text"
                        className="form-control bg-light border-0"
                        id="firstName"
                        placeholder="Your First Name"
                      />
                      <label for="firstName">First Name</label>
                      {/* ERR MESSAGE */}
                      <span className="text-primary">
                        {formik.touched.firstName && formik.errors.firstName}
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        value={formik.values.lastName}
                        onChange={formik.handleChange('lastName')}
                        onBlur={formik.handleBlur('lastName')}
                        type="text"
                        className="form-control bg-light border-0"
                        id="lastName"
                        placeholder="Your Last Name"
                      />
                      <label for="lastName">Last Name</label>
                      {/* ERR MESSAGE */}
                      <span className="text-primary">
                        {formik.touched.lastName && formik.errors.lastName}
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        value={formik.values.email}
                        onChange={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        type="email"
                        className="form-control bg-light border-0"
                        id="subject"
                        placeholder="Your Email"
                      />
                      <label for="subject">Email</label>
                      {/* ERR MESSAGE */}
                      <span className="text-primary">
                        {formik.touched.email && formik.errors.email}
                      </span>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        type="password"
                        className="form-control bg-light border-0"
                        id="subject"
                        placeholder="Your Password"
                      />
                      <label for="subject">Password</label>
                      {/* ERR MESSAGE */}
                      <span className="text-primary">
                        {formik.touched.password && formik.errors.password}
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
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className="mt-3">
            Have you already Registered? You can Sign In{' '}
            <a href="/login">Here</a>
          </p>
        </div>
      </div>

      {/* <!-- Contact End --> */}

      <Footer />
    </div>
  );
};

export default Register;
