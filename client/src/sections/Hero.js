import React from "react";
const Hero = () => {
  return (
    <>
      <section
        className=" text-light d-flex justify-content-center align-items-center  p-5 pt-lg-3 p-lg-0 text-center text-sm-start"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(/assets/img/hero.jpg)`,
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1>
                Buy the <span className="text-warning">Best Products.</span>
              </h1>
              <p className="lead my-4">
                We provide the best products in the market. With the best
                quality and the best price.
              </p>
              <a href="#start-journey">
                <button className="btn btn-danger btn-lg">
                  Start your journey
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
