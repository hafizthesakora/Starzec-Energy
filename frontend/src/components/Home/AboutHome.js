import React from 'react';

export const AboutHome = () => {
  return (
    <div>
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p>
                <span className="text-primary me-2">#</span>Welcome To the
                Carbon Free Space
              </p>
              <h1 className="display-5 mb-4">
                Why Being Carbon Free is important to
                <span className="text-primary">Starzec</span> Energy!
              </h1>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Free
                Car Parking
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>Natural
                Environment
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>
                Professional Guide & Security
              </h5>
              <h5 className="mb-3">
                <i className="far fa-check-circle text-primary me-3"></i>World
                Best Animals
              </h5>
              <a className="btn btn-primary py-3 px-5 mt-3" href="/">
                Read More
              </a>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="img-border">
                <img className="img-fluid" src="img/about.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </div>
  );
};
