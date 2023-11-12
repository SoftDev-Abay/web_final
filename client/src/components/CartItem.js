import React from "react";
import { useStateContext } from "../context/StateContext";
const CartItem = ({ id, img, name, quantity, price }) => {
  const { onRemove } = useStateContext();
  return (
    <div className="card rounded-3 mb-4">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2 col-lg-2 col-xl-2">
            <img
              src={"http://localhost:5000/images/" + img}
              className="img-fluid rounded-3"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{name}</p>
            <p className="text-muted mb-0 text-small">{quantity}x</p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 ">
            <h5 className="mb-0">{price}$</h5>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <div className="d-flex justify-content-end">
              <button className="close" onClick={() => onRemove(id)}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
