import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container mt-5 px-5 px-lg-0">
        <div className="d-flex flex-column flex-md-row justify-content-evenly">
          <div className="mb-4">
            <h3 className="font-weight-bold mb-4">Connect with us</h3>
            <div className="input-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-danger" type="button">
                  Sign Up
                </button>
              </div>
            </div>
            <h5 className="font-weight-bold mb-3">FOLLOW US</h5>
            <div className="social-media">
              <i className="bi bi-facebook h5"></i>
              <i className="bi bi-instagram h5"></i>
              <i className="bi bi-twitter h5"></i>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-weight-bold mb-4">Quick Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="">{`>`} </i> Home
              </li>
              <li className="mb-2">
                <i className="">{`>`} </i> About
              </li>
              <li className="mb-2">
                <i className="">{`>`} </i> Products
              </li>
              <li>
                <i className=""> {`>`} </i> Contact Us
              </li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-weight-bold mb-4">Contact Us</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-telephone mr-2 h5"></i> +7 700 542 1237
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope mr-2 h5"></i> info@lionheart.com
              </li>
              <li>
                <i className="bi bi-geo-alt mr-2 h5"></i> Expo Plaza 25
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-center h6">© 2023 Lion Heart. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
