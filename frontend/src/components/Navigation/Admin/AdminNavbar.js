import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../../redux/slices/users/usersSlices';

const AdminNavbar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* <!-- Topbar Start --> */}
      <div
        class="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="row gx-0 d-none d-lg-flex">
          <div class="col-lg-7 px-5 text-start">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-map-marker-alt text-primary me-2"></small>
              <small>Accra Mall, Accra, Ghana</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center py-3">
              <small class="far fa-clock text-primary me-2"></small>
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div class="col-lg-5 px-5 text-end">
            <div class="h-100 d-inline-flex align-items-center py-3 me-4">
              <small class="fa fa-phone-alt text-primary me-2"></small>
              <small>+233 345 6789</small>
            </div>
            <div class="h-100 d-inline-flex align-items-center">
              <a class="btn btn-sm-square bg-white text-primary me-1" href="/">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="btn btn-sm-square bg-white text-primary me-1" href="/">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="btn btn-sm-square bg-white text-primary me-1" href="/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a class="btn btn-sm-square bg-white text-primary me-0" href="/">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}

      {/*   

    <!-- Navbar Start --> */}
      <nav
        class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-4 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to="/" class="navbar-brand p-0">
          <img class="img-fluid me-3" src="img/icon/icon-10.png" alt="Icon" />
          <h1 class="m-0 text-primary">Starzec Energy</h1>
        </Link>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse py-4 py-lg-0" id="navbarCollapse">
          <div class="navbar-nav ms-auto">
            <Link to="/" class="nav-item nav-link active">
              Home
            </Link>
            <div class="nav-item dropdown">
              <Link
                to="/"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                About
              </Link>
              <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link to="/team" class="dropdown-item">
                  Management
                </Link>
                <Link to="/message-ceo" class="dropdown-item">
                  Message from CEO
                </Link>
                <Link to="/overview" class="dropdown-item">
                  Overview
                </Link>
                <Link to="/partners" class="dropdown-item">
                  Partners
                </Link>
              </div>
            </div>
            <div class="nav-item dropdown">
              <Link
                to="/"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Blog
              </Link>
              <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link to="/blogs" class="dropdown-item">
                  All Posts
                </Link>
                <Link to="/create-blog" class="dropdown-item">
                  Create a Post
                </Link>
              </div>
            </div>
            <div class="nav-item dropdown">
              <Link
                to="/"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Services
              </Link>
              <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link to="/services" class="dropdown-item">
                  Our Services
                </Link>
                <Link to="/team" class="dropdown-item">
                  Our Projects
                </Link>
              </div>
            </div>
            <div class="nav-item dropdown">
              <Link
                to="/"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Category
              </Link>
              <div class="dropdown-menu rounded-0 rounded-bottom m-0">
                <Link to="/add-category" class="dropdown-item">
                  Add New Category
                </Link>
                <Link to="/category-list" class="dropdown-item">
                  Category List
                </Link>
              </div>
            </div>
          </div>
          <a
            href="/"
            onClick={() => dispatch(logoutAction())}
            class="btn btn-primary"
          >
            Logout<i class="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
      {/* <!-- Navbar End --> */}
    </div>
  );
};

export default AdminNavbar;
