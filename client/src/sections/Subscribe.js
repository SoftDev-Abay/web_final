import React from "react";

const Subscribe = () => {
  return (
    <section className="p-5" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img
              src="/assets/img/dmcx0qed-removebg-preview.png"
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-md p-5">
            <h2 id="randtext">Subscribe Us And Get 25% Off For All Products</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              animi sunt cumque qui debitis hic. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Similique qui eos, soluta fugiat
              natus facere!
            </p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />
              <button
                onclick="buttonRan()"
                type="submit"
                className="btn bg-danger btn-lg"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
