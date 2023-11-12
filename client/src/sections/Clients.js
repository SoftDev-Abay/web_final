import React from "react";

const Clients = () => {
  return (
    <section className="clients bg-danger text-white py-5" id="clients">
      <div className="container">
        <h1 className="text-center mb-5" id="texttochange">
          Our Happy Clients
        </h1>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card bg-light text-dark h-100">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/women/11.jpg"
                      alt=""
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h5 className="mb-1">Sabira Bulatpecova</h5>
                      <p className="text-black-50">@sabira_bulatpekova</p>
                    </div>
                  </div>
                  <div className="stars-icons">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
                <div className="mt-3">
                  Absolutely in love with my new wardrobe from Lion Heart! The
                  variety of stylish outfits and the quality of fabrics are
                  remarkable. The team here has a keen eye for fashion, and
                  their customer service is exceptional. I feel confident and
                  trendy in every purchase. Highly recommended!
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-light text-dark h-100">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/11.jpg"
                      alt=""
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h5 className="mb-1">Damir Aliev</h5>
                      <p className="text-black-50">@damir_aliev</p>
                    </div>
                  </div>
                  <div className="stars-icons">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
                <div className="mt-3">
                  Shopping at Lion Heart was a delightful experience. The
                  collection is on-trend and diverse, catering to various
                  tastes. The staff's friendly approach and helpful suggestions
                  made my shopping spree enjoyable. The clothes are not just
                  fashionable but also comfortable. I found my new favorite
                  store!
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-light text-dark h-100">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/13.jpg"
                      alt=""
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h5 className="mb-1">Nurzhau Azenba</h5>
                      <p className="text-black-50">@nurzhau_azenba</p>
                    </div>
                  </div>
                  <div className="stars-icons">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
                <div className="mt-3">
                  I can't express how impressed I am with [Your Clothing Store
                  Name]. The attention to detail in their clothing designs is
                  exquisite. Each piece I bought reflects the latest fashion
                  trends and fits perfectly. The store ambiance is welcoming,
                  and the staff members are knowledgeable and friendly. I'm a
                  loyal customer now!
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-light text-dark h-100">
              <div className="card-body">
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src="https://randomuser.me/api/portraits/men/20.jpg"
                      alt=""
                      className="rounded-circle me-3"
                      width="50"
                    />
                    <div>
                      <h5 className="mb-1">Abay Aliev</h5>
                      <p className="text-black-50">@abay_aliev</p>
                    </div>
                  </div>
                  <div className="stars-icons">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-half"></i>
                  </div>
                </div>
                <div className="mt-3">
                  Lion Heart is my go-to fashion destination. The curated
                  selection of clothing and accessories is chic and affordable.
                  The store layout is visually appealing, making the shopping
                  experience enjoyable. The quality of the garments is
                  top-notch, and I always receive compliments when I wear
                  outfits from here. Exceptional fashion, exceptional store!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
