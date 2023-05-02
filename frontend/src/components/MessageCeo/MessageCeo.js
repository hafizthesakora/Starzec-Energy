import React from 'react';
import Footer from '../Footer/Footer';

const MessageCeo = () => {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            Message from Our CEO
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
                message-from-ceo
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="img-border">
                <img class="img-fluid" src="img/about.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p>
                <span class="text-primary me-2">#</span>Message from our CEO
              </p>
              <h1 class="display-5 mb-4">
                Welcome Fellas, to
                <span class="text-primary"> Starzec</span> Energy!
              </h1>
              <p class="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos. Stet no et
                lorem dolor et diam, amet duo ut dolore vero eos. No stet est
                diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy
                clita sit at, sed sit sanctus dolor eos. Stet no et lorem dolor
                et diam, amet duo ut dolore vero eos. No stet est diam rebum
                amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit
                at, sed sit sanctus dolor eos. Stet no et lorem dolor et diam,
                amet duo ut dolore vero eos. No stet est diam rebum amet diam
                ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed
                sit sanctus dolor eos. Stet no et lorem dolor et diam, amet duo
                ut dolore vero eos. No stet est diam rebum amet diam ipsum.
                Clita clita labore, dolor duo nonumy clita sit at, sed sit
                sanctus dolor eos. Stet no et lorem dolor et diam, amet duo ut
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MessageCeo;
