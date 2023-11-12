import { React, useState, useEffect } from "react";
import ViewProducModal from "./ViewProducModal";
import AddProductModal from "./AddProductModal";

const ProductsPanel = () => {
  const [visibleProductModal, setVisibleProductModal] = useState(false);
  const [currentViewProduct, setCurrentViewProduct] = useState({}); // [id, name, desc, price

  const [visibleAddProductModal, setVisibleAddProductModal] = useState(false);

  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
      const responce = await fetch("http://localhost:5000/products");
      const json_responce = await responce.json();
      setProducts(json_responce);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <div class="spacer" id="productsTable"></div>
      <div class="container-fluid mb-5" style={{ height: "100vh" }}>
        <div class="container d-flex justify-content-between">
          <h1 class="text-start">Products</h1>
          <button
            type="button"
            class="col-3 btn btn-success"
            onClick={() => {
              setVisibleAddProductModal(true);
            }}
            id="btnAddProduct"
          >
            ✏️ Add a Product
          </button>
        </div>

        <div class="container ml-3 mr-3 mt-5">
          <table class="table table-striped table-hover" id="tblProducts">
            <thead>
              <tr>
                <th scope="col-1">Product ID</th>
                <th scope="col-10">Product Name</th>
                <th scope="col-1">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr>
                  <td scope="col-1">{product.product_id}</td>
                  <td scope="col-10">{product.product_name}</td>
                  <td scope="col-1">
                    <button
                      type="button"
                      className="btn btn-primary "
                      onClick={() => {
                        setCurrentViewProduct(product);
                        setVisibleProductModal(true);
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {
        /* <!--Add Product Modal--> */
        visibleAddProductModal && (
          <AddProductModal
            show={visibleAddProductModal}
            setShow={setVisibleAddProductModal}
          />
        )
      }

      {
        /* <!--View Product Modal--> */
        visibleProductModal && (
          <ViewProducModal
            show={visibleProductModal}
            product={currentViewProduct}
            setShow={setVisibleProductModal}
          />
        )
      }
    </>
  );
};

export default ProductsPanel;
