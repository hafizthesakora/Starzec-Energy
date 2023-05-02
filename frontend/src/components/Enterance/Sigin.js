import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/slices/users/usersSlices';

//Form Schema
const formSchema = Yup.object({
  email: Yup.string().required('Email is Required'),
  password: Yup.string().required('Password is Required'),
});

const Sigin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Initialising Formik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      //dispatch the action
      dispatch(loginUserAction(values));
      console.log(values);
    },
    validationSchema: formSchema,
  });

  //Redirect
  const store = useSelector((state) => state?.users);
  const { userAuth, loading, serverErr, appErr } = store;
  if (userAuth) return navigate('/');

  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div
        class="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container py-5">
          <h1 class="display-4 text-white mb-3 animated slideInDown">
            Sign In
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a class="text-white" href="/">
                  Home
                </a>
              </li>
              <li class="breadcrumb-item">
                <a class="text-white" href="/">
                  Pages
                </a>
              </li>
              <li
                class="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Sign In
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* 
      <!-- Contact Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <p>
                <span class="text-primary me-2">#</span>Sign In
              </p>
              <h1 class="display-5 mb-4">Hello There? We have Missed You!</h1>
              <p class="mb-4">
                We will write some small thing here about signing in
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
                <div class="row g-3">
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        value={formik.values.email}
                        onChange={formik.handleChange('email')}
                        onBlur={formik.handleBlur('email')}
                        type="email"
                        class="form-control bg-light border-0"
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
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        value={formik.values.password}
                        onChange={formik.handleChange('password')}
                        onBlur={formik.handleBlur('password')}
                        type="password"
                        class="form-control bg-light border-0"
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

                  <div class="col-12">
                    {loading ? (
                      <button class="btn btn-primary w-100 py-3" disabled>
                        Loading Please Wait...
                      </button>
                    ) : (
                      <button class="btn btn-primary w-100 py-3" type="submit">
                        Sign In
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
          <p className="mt-3">
            Have you Not Registered Yet? You can Register{' '}
            <a href="/register">Here</a>
          </p>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      <Footer />
    </div>
  );
};

export default Sigin;
