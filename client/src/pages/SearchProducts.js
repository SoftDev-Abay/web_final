import React, { useContext, useEffect, useMemo, useState } from "react";
// import { products } from "../assets/index";
import Product from "../components/Product";
import { useProductsContext } from "../context/ProductsContext";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";

const SearchProducts = ({}) => {
  const { products } = useProductsContext();
  const [searchText, setSearchText] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const filterProductsHandlier = () => {
    const wordToSearch = searchText.trimStart().toLowerCase().split(" ");
    if (searchText.length > 0) {
      const updatedProducts = products.filter(
        (product) =>
          wordToSearch.filter((word) =>
            product.product_name.toLowerCase().includes(word.toLowerCase())
          ).length > 0
      );
      setFilteredProducts(updatedProducts);
    } else {
      setFilteredProducts(products);
    }
  };
  return (
    <>
      <Navbar classNamePosition="position-static" bgDark={true}></Navbar>
      <section className="py-5">
        <div className="container">
          <div className="row gy-5">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <h1 className="">Search</h1>
              <div class="input-group rounded" style={{ width: "300px" }}>
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <span
                  class="input-group-text border-0 font-weight-bold"
                  role="button"
                  onClick={filterProductsHandlier}
                >
                  <i class="bi bi-search font-weight-bold "></i>
                </span>
              </div>
            </div>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
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
              })
            ) : (
              <>
                <div className="col-12">
                  <h4 className="text-center">No Products Found...</h4>
                </div>
                {products.map((product) => {
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
              </>
            )}
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default SearchProducts;
