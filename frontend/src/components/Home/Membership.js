import React from 'react';

function Membership() {
  return (
    <div>
      {/* <!-- Portfolio Go here Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="row g-5 mb-5 align-items-end wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="col-lg-6">
              <p>
                <span className="text-primary me-2">#</span>Newsletter
              </p>
              <h1 className="display-5 mb-0">
                You Can Be A Proud Energy Advocate with{' '}
                <span className="text-primary">Starzec</span> Energy Today
              </h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="/">
                Subscribe to our Newsletter Now
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Membership End --> */}
    </div>
  );
}

export default Membership;
