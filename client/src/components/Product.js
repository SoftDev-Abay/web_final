import { React, useContext } from "react";
import { useStateContext } from "../context/StateContext";
import { useProductsContext } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

import "./Product.css";

const Product = ({
  id,
  name,
  img,
  desc = null,
  price,
  sale,
  favorite = false,
  className = "",
}) => {
  const navigate = useNavigate();

  const { addToCart, setShowCart } = useStateContext();
  const { onFavorite, unFavorite } = useProductsContext();
  const addToCartHandlier = () => {
    addToCart(
      {
        id,
        name,
        img,
        desc,
        price: sale > 0 ? price - price / sale : price,
        sale,
        favorite,
      },
      1
    );
  };
  return (
    <div
      className={
        className.length > 0 ? className : "col-6 col-sm-6 col-md-4 col-xl-3"
      }
    >
      <div
        className="card position-relative h-100"
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          navigate(`/product/${id}`);
        }}
      >
        {favorite ? (
          <i
            class="heart-icon bi bi-heart-fill"
            onClick={(e) => {
              e.stopPropagation();
              unFavorite(id);
            }}
          ></i>
        ) : (
          <i
            class="heart-icon bi bi-heart"
            onClick={(e) => {
              e.stopPropagation();
              onFavorite(id);
            }}
          ></i>
        )}
        <img
          src={"http://localhost:5000/images/" + img}
          className="card-img-top"
          width={className.length > 0 ? "100%" : "286px"}
          height={className.length > 0 ? "100%" : "286px"}
          alt="Jacket"
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title d-flex justify-content-between">
            {name}
            <span className="text-danger">
              {sale > 0 ? (
                <span>
                  <span className="text-decoration-line-through text-dark mx-1">
                    {price}
                    {"  "}
                  </span>
                  {price - price / sale} $
                </span>
              ) : (
                `${price} $`
              )}
            </span>
          </h5>
          {desc && (
            <p className="card-text">
              {desc.slice(0, 250)}
              {desc.length > 250 ? "..." : ""}
            </p>
          )}
          <div className="d-flex justify-content-center mt-4">
            <a
              className="btn btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                addToCartHandlier();
              }}
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
