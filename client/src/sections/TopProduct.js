import { React, useEffect, useState } from "react";

const TopProduct = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    active == 2 ? setActive(0) : setActive(active + 1);
  };
  const prevSlide = () => {
    active == 0 ? setActive(2) : setActive(active - 1);
  };

  return (
    <section className="p-5 bg-dark" id="product">
      <div className="d-flex align-items-center justify-content-center">
        <div className="container bg-white rounded-3 p-2 row">
          <div
            id="carouselExample"
            className="carousel slide col-12 col-lg-7 p-0"
            data-carousel-my
          >
            <div
              className="carousel-inner rounded-3"
              style={{ maxHeight: "800px" }}
              data-slides-my
            >
              <div className={`carousel-item ${active == 0 ? "active" : ""}`}>
                <img
                  src="/assets/img/product1.png"
                  className="d-block img-fluid"
                  alt="..."
                />
              </div>
              <div className={`carousel-item ${active == 1 ? "active" : ""}`}>
                <img
                  src="/assets/img/product2.png"
                  className="d-block img-fluid"
                  alt="..."
                />
              </div>
              <div className={`carousel-item ${active == 2 ? "active" : ""}`}>
                <img
                  src="/assets/img/product4.png"
                  className="d-block img-fluid"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={prevSlide}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={nextSlide}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="col d-flex align-items-center">
            <div className="w-100">
              <h1 className="p-2">Beast fly</h1>
              <hr />
              <div className="p-2">
                <p>Product Description:</p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Ratione enim sint, quia natus quod eos laborum aliquid tempore
                  quasi labore dicta asperiores blanditiis laudantium. Est minus
                  obcaecati quibusdam cupiditate ipsam.
                </p>
              </div>
              <hr />
              <div className="p-2 d-flex gap-3 align-items-center">
                <p className="p-0 mb-0">Category tags:</p>
                <div className="d-flex gap-2 text-white">
                  <span className="py-1 px-2 bg-dark rounded-3">White</span>
                  <span className="py-1 px-2 bg-dark rounded-3">Black</span>
                  <span className="py-1 px-2 bg-dark rounded-3">Blue</span>
                  <span className="py-1 px-2 bg-dark rounded-3">Purple</span>
                </div>
              </div>
              <hr />
              <div className="p-2">
                <button className="py-2 px-3 bg-white border-dark rounded-3">
                  Wishlist
                </button>
                <button className="py-2 px-3 bg-white border-dark rounded-3">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopProduct;
