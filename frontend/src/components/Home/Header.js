import React from 'react';

export const Header = () => {
  return (
    <div>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="row g-0 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div className="header-bg h-100 d-flex flex-column justify-content-center p-5">
              <h1 className="display-4 text-light mb-5">
                Changing the face of energy in Africa using clean energy
              </h1>
              <div className="d-flex align-items-center pt-4 animated slideInDown">
                <a
                  href="/"
                  className="btn btn-primary py-sm-3 px-3 px-sm-5 me-5"
                >
                  Read More
                </a>
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/watch?v=o77h301-VIE&t=12s"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h6 className="text-white m-0 ms-4 d-none d-sm-block">
                  Watch Video
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="owl-carousel header-carousel">
              <div className="owl-carousel-item">
                <img className="img-fluid" src="img/go-2.jpg" alt="" />
              </div>
              <div className="owl-carousel-item">
                <img className="img-fluid" src="img/go.jpg" alt="" />
              </div>
              <div className="owl-carousel-item">
                <img className="img-fluid" src="img/go-4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      {/* <!-- Video Modal Start --> */}
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- 16:9 aspect ratio --> */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/watch?v=o77h301-VIE&t=12s"
                  id="video"
                  allowfullscreen
                  allowscriptaccess="always"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Video Modal End --> */}
    </div>
  );
};
