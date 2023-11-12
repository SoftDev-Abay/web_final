import { ReactComponentElement, useState, useEffect } from "react";
import "./Slider.css";
import Product from "./Product";
import { useProductsContext } from "../context/ProductsContext";

const Slider = () => {
  const [leftPosition, setLeftPosition] = useState(0);
  const { products } = useProductsContext();
  const productsOnSale = products.filter((product) => {
    if (product.sale > 0) {
      return product;
    }
  });
  console.log(productsOnSale);
  let itemWidth = window.screen.width / 4; // Adjust this value as needed
  const containerWidth =
    itemWidth * productsOnSale.length + (24 * 7 + 32 * 2 + 100); // Number of items

  const onLeftClick = () => {
    let left = leftPosition + itemWidth * 4;
    if (left > 0) {
      left = 0;
    }
    setLeftPosition(left);
  };

  const onRightClick = () => {
    let left = leftPosition - itemWidth * 4;
    const maxLeft = -containerWidth + window.innerWidth - itemWidth;

    if (left < maxLeft) {
      left = maxLeft;
    }
    setLeftPosition(left);
  };

  return (
    <>
      <h1 className="text-center mt-5 mb-4">On Sale, up to 90% off </h1>
      <div className="container-fluid mb-5 overflow-hidden px-5 position-relative">
        <div style={{ width: "auto" }}>
          <button
            type="button"
            className="slider-button-left slider-button"
            onClick={onLeftClick}
          >
            <i className="bi bi-arrow-left"></i>
          </button>
          <button
            type="button"
            className="slider-button-right slider-button"
            onClick={onRightClick}
          >
            <i className="bi bi-arrow-right"></i>
          </button>
          <div
            className="d-flex flex-row position-relative slider-container"
            style={{ left: leftPosition, gap: "2rem" }}
          >
            {productsOnSale.map((product) => {
              return (
                <Product
                  key={`${product.product_id}` + "slider"}
                  id={product.product_id}
                  img={product.img_url}
                  name={product.product_name}
                  price={product.price}
                  category={product.category}
                  favorite={product.favorite}
                  className="col-3"
                  sale={product.sale}
                ></Product>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
