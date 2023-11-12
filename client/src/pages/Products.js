import React, { useContext, useEffect, useMemo, useState } from "react";
// import { products } from "../assets/index";
import Product from "../components/Product";
import { useProductsContext } from "../context/ProductsContext";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const Products = ({}) => {
  const { products } = useProductsContext();
  const [currentCategory, setCurrentCategory] = useState("All");

  let categories = [];
  const getCategories = useMemo(() =>
    products.map(
      (product) => {
        if (!categories.includes(product.category)) {
          categories.push(product.category);
        }
      },
      [products]
    )
  );

  return (
    <>
      <Navbar classNamePosition="position-static" bgDark={true}></Navbar>
      <section className="py-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-12 d-flex justify-content-between">
              <h1 className=" mx-4">Products</h1>
              <select
                name=""
                class="form-select w-25 form-select-sm mx-4"
                id=""
                onChange={(e) => {
                  setCurrentCategory(e.target.value);
                }}
              >
                <option value="All">All</option>
                {categories.map((category) => {
                  return <option value={category}>{category}</option>;
                })}
              </select>
            </div>
            {products
              .filter((product) => {
                if (currentCategory === "All") {
                  return product;
                } else if (product.category === currentCategory) {
                  return product;
                }
              })
              .map((product) => {
                return (
                  <Product
                    key={product.product_id}
                    id={product.product_id}
                    img={product.img_url}
                    name={product.product_name}
                    desc={product.description}
                    price={product.price}
                    category={product.category}
                    sale={product.sale}
                    favorite={product.favorite}
                  ></Product>
                );
              })}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Products;
