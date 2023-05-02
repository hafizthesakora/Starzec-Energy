import React from 'react';

function WorkingHours() {
  return (
    <div>
      {/* 
<!-- Visiting Hours Start --> */}
      <div
        className="container-xxl bg-primary visiting-hours my-5 py-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-6 text-white mb-5">Working Hours</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span>Monday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Tuesday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Wednesday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Thursday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Friday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Saturday</span>
                  <span>9:00AM - 6:00PM</span>
                </li>
                <li className="list-group-item">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
            <div
              className="col-md-6 text-light wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1 className="display-6 text-white mb-5">Contact Info</h1>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Office</td>
                    <td>Accra Mall, Accra, Ghana</td>
                  </tr>
                  <tr>
                    <td>Plants</td>
                    <td>123 Street, Takoradi, Ghana</td>
                  </tr>
                  <tr>
                    <td>Ticket</td>
                    <td>
                      <p className="mb-2">+233 345 6789</p>
                      <p className="mb-0">ticket@example.com</p>
                    </td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>
                      <p className="mb-2">+233 345 6789</p>
                      <p className="mb-0">support@example.com</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Visiting Hours End --> */}
    </div>
  );
}

export default WorkingHours;
