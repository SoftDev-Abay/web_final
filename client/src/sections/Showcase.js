import React from "react";

const Showcase = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-6 left d-flex align-items-stretch"
          style={{ backgroundColor: "#03503c" }}
        >
          <div className="text-container d-flex flex-column justify-content-center px-3">
            <h3 className="text-white">Comfortable and warm</h3>
            <p className="text-white-50">
              Experience the ultimate comfort with our cozy and warm collection.
              Perfect for any season, our garments are designed to keep you
              comfortable all day long.
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
          <img
            src="/assets/img/left.png"
            alt=""
            className="img-fluid h-100 w-50"
          />
        </div>
        <div
          className="py-5 py-md-0 col-md-6 right d-flex align-items-stretch"
          style={{ backgroundColor: "#d0d0d0" }}
        >
          <img
            src="/assets/img/lovepik-sports-mens-running-movements-png-image_400285400_wh1200-removebg-preview.png"
            alt=""
            className="img-fluid h-100 w-50"
          />
          <div className="text-container d-flex flex-column justify-content-center px-3">
            <h3>Be at ease</h3>
            <p>
              Embrace your style with confidence. Our clothes are designed to
              make you feel comfortable and confident in every move. Be your
              best with us.
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
