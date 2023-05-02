import React from 'react';
import './../Teams/team.css';

const Teams = () => {
  return (
    <div>
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid header-bg py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <h1 className="display-4 text-white mb-3 animated slideInDown">
            Our Team
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
                team
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      <section class="team-section py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt=""
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      John Lynch
                    </h5>
                    <div class="mb-3 text-center">Co-founder / CEO</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                      Curabitur pellentesque convallis purus non ornare. Donec
                      bibendum sed purus dignissim rutrum. Maecenas bibendum
                      feugiat est, et venenatis nunc.
                    </div>
                  </div>
                </div>
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.twitter.com">
                        <i class="fab fa-twitter fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.facebook.com">
                        <i class="fab fa-facebook-f fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.instagram.com">
                        <i class="fab fa-instagram fa-fw"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt=""
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Joe Thomas
                    </h5>
                    <div class="mb-3 text-center">Co-founder / CTO</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                      Curabitur pellentesque convallis purus non ornare. Donec
                      bibendum sed purus dignissim rutrum. Maecenas bibendum
                      feugiat est, et venenatis nunc.
                    </div>
                  </div>
                </div>
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.twitter.com">
                        <i class="fab fa-twitter fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.facebook.com">
                        <i class="fab fa-facebook-f fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.instagram.com">
                        <i class="fab fa-instagram fa-fw"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                      alt=""
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Jean Torres
                    </h5>
                    <div class="mb-3 text-center">Marketing</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.{' '}
                    </div>
                  </div>
                </div>
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.twitter.com">
                        <i class="fab fa-twitter fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.facebook.com">
                        <i class="fab fa-facebook-f fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.instagram.com">
                        <i class="fab fa-instagram fa-fw"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt=""
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Doris Meyer
                    </h5>
                    <div class="mb-3 text-center">Product Manager</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                    </div>
                  </div>
                </div>
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.twitter.com">
                        <i class="fab fa-twitter fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.facebook.com">
                        <i class="fab fa-facebook-f fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.instagram.com">
                        <i class="fab fa-instagram fa-fw"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      alt=""
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Ronald Reid
                    </h5>
                    <div class="mb-3 text-center">iOS Developer</div>
                    <div>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Vivamus eget eros
                      vestibulum, accumsan ante viverra, condimentum tellus.
                    </div>
                  </div>
                </div>
                <div class="card-footer theme-bg-primary border-0 text-center">
                  <ul class="social-list list-inline mb-0 mx-auto">
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.twitter.com">
                        <i class="fab fa-twitter fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.facebook.com">
                        <i class="fab fa-facebook-f fa-fw"></i>
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a class="text-dark" href="www.instagram.com">
                        <i class="fab fa-instagram fa-fw"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teams;
