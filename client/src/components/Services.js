import React from "react";

const Services = () => {
  return (
    <section className="services bg-danger py-3">
      <div className="container">
        <div className="row justify-content-evenly">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-md-0">
            <div className="services-item d-flex align-items-center justify-content-around text-white">
              <i className="bi bi-truck h2"></i>
              <div className="text-container mx-2">
                <p className="title mb-1 h6">FREE DELIVERY</p>
                <p className="desc mb-0">When ordering from $500.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-md-0">
            <div className="services-item d-flex align-items-center justify-content-around text-white">
              <i className="bi bi-cash h2"></i>
              <div className="text-container mx-2">
                <p className="title mb-1 h6">100% REFUND OF MONEY</p>
                <p className="desc mb-0">14-days of complaint.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-md-0">
            <div className="services-item d-flex align-items-center justify-content-around text-white">
              <i className="bi bi-emoji-smile h2"></i>
              <div className="text-container mx-2">
                <p className="title mb-1 h6">HAPPY CLIENTS</p>
                <p className="desc mb-0">10,000 products every year.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
