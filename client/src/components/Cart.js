import React from "react";
import { products } from "../assets/index";
import Product from "../components/Product";
import "./Cart.css";
import { useStateContext } from "../context/StateContext";
import CartItem from "./CartItem";

const Cart = () => {
  const {
    showCart,
    setShowCart,
    totalPrice,
    cartItems,
    setCartItems,
    setTotalPrice,
  } = useStateContext();
  const Buy = () => {
    alert("Thank you for your purchase!");
    setCartItems([]);
    setTotalPrice(0);
    setShowCart(false);
  };
  if (!showCart) return null;
  return (
    <div
      id="cart-container"
      className="shadow-lg p-3 mb-5 shopping-cart-container bg-light"
    >
      <div className="container h-100">
        <div className="row d-flex justify-content-center h-100 py-5">
          <div className="col-10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              <button
                type="button"
                className="close"
                onClick={() => setShowCart(false)}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div id="cart-content-items">
              {cartItems.map((item) => (
                <CartItem
                  id={item.id}
                  img={item.img}
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                ></CartItem>
              ))}
            </div>
            <div className="fw-bold d-flex justify-content-between mb-1">
              Total amount:
              <span className="text-danger" id="cart-price">
                {(Math.round(totalPrice * 100) / 100).toFixed(2)}$
              </span>
            </div>
            <div className="card">
              <button type="button" onClick={Buy} className="btn btn-warning">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
