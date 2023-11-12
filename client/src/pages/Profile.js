import { React, useRef } from "react";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import Product from "../components/Product";
import { useProductsContext } from "../context/ProductsContext";
import Cart from "../components/Cart";

const Profile = () => {
  const { user, setUser } = useStateContext();
  const navigate = useNavigate();
  const { products } = useProductsContext();
  const currentPasswordRef = useRef();
  const newPasswordRef = useRef();
  if (user == null) {
    alert("You need to login first");
    navigate("/login");
    return <div>Not logged in</div>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(currentPasswordRef.current.value);
    console.log(newPasswordRef.current.value);
    if (currentPasswordRef.current.value != user.password) {
      alert("Wrong current password");
      return;
    }
    try {
      const result = await fetch("http://localhost:5000/change_password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: user.user_id,
          new_password: newPasswordRef.current.value,
        }),
      });
      const responce = await result.json();
      console.log(responce);
      if (responce.status == 200) {
        alert("Changed password success");
        setUser(responce.user);
        localStorage.setItem("user", JSON.stringify(responce.user));
      } else {
        alert("Changed password fail");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Navbar classNamePosition="position-static" bgDark={true}></Navbar>
      <Cart></Cart>
      <div className="container my-5">
        <div className="row gx-5">
          <div className="col-12 col-lg-7">
            <h1 className="">Favorite</h1>
            <div className="row mt-5 gy-3">
              {products.map((product) => {
                if (product.favorite == true) {
                  return (
                    <Product
                      key={product.product_id}
                      id={product.product_id}
                      img={product.img_url}
                      name={product.product_name}
                      price={product.price}
                      category={product.category}
                      sale={product.sale}
                      favorite={product.favorite}
                      className="col-4"
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="col mt-5 mt-lg-0">
            <h1 className="">Acoount Details</h1>
            <form onSubmit={handleSubmit}>
              <div class="form-group mt-5 ">
                <label className="h5 fw-normal">Email address</label>
                <input type="email" class="form-control " value={user.email} />
              </div>
              <div class="form-group mt-3">
                <label className="h5 fw-normal">Current password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Type password"
                  required
                  ref={currentPasswordRef}
                />
              </div>
              <div class="form-group mt-3">
                <label className="h5 fw-normal">New password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Change password"
                  required
                  ref={newPasswordRef}
                />
              </div>
              <button type="submit" class="mt-4 btn btn-warning">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Profile;
