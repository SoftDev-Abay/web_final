import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";
import Navbar from "../sections/Navbar";
import Footer from "../sections/Footer";
import { useStateContext } from "../context/StateContext";
import { useProductsContext } from "../context/ProductsContext";
import Product from "../components/Product";
import Cart from "../components/Cart";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { products, onFavorite, unFavorite, isFavoriteProduct } =
    useProductsContext();
  const { addToCart, setShowCart } = useStateContext();
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = () => {
    addToCart(
      {
        id: product.product_id,
        name: product.product_name,
        img: product.img_url,
        desc: product.description,
        price: product.price,
        sale: product.sale,
      },
      parseInt(quantity)
    );
  };

  useEffect(() => {
    // Fetch data for the specific product using the id
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const productData = await response.json();
        setProduct({
          ...productData,
          favorite: isFavoriteProduct(productData.product_id),
        });
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const {
    sale,
    category,
    img_url,
    price,
    description,
    product_id,
    product_name,
    favorite,
  } = product;
  const addToCartHandlier = () => {
    addToCart(
      {
        id: product_id,
        name: product_name,
        img: img_url,
        desc: description,
        price: sale > 0 ? price - price / sale : price,
        sale: sale,
      },
      1
    );
  };
  const getRelatedProducts = () => {
    const relatedProducts = products.filter(
      (product) => product.product_id != product_id
    );

    const wordsToSearch = product_name.trimStart().toLowerCase().split(" ");

    const productsRelatedByName = relatedProducts.filter(
      (productFilter) =>
        wordsToSearch.filter((word) =>
          productFilter.product_name.toLowerCase().includes(word.toLowerCase())
        ).length > 0
    );
    const productsRelatedByCategory = relatedProducts.filter(
      (productFilter) => productFilter.category === category
    );

    const relatedProductsWithLogicWithDublications = [
      ...productsRelatedByName,
      ...productsRelatedByCategory,
    ];
    const relatedProductsWithLogic =
      relatedProductsWithLogicWithDublications.filter(
        (product, index, self) =>
          self.findIndex((t) => t.product_id === product.product_id) === index
      );

    const relatedProductsWithLogicCount = relatedProductsWithLogic.length;

    if (relatedProductsWithLogicCount > 4) {
      return relatedProductsWithLogic.slice(0, 4);
    }
    const productsToAdd = relatedProducts
      .filter((filterProduct) => {
        return !relatedProductsWithLogic.includes(filterProduct);
      })
      .slice(0, 4 - relatedProductsWithLogicCount);
    return [...relatedProductsWithLogic, ...productsToAdd];
  };
  // Render your SingleProduct component with the fetched data
  return (
    <>
      <Cart></Cart>

      <Navbar classNamePosition="position-static" bgDark={true}></Navbar>

      {/* <!-- Product section--> */}
      <section class="py-5">
        <div class="container px-4 px-lg-5 my-5 position-relative">
          {favorite ? (
            <i
              class="heart-icon bi bi-heart-fill"
              onClick={() => {
                unFavorite(product_id);
                setProduct({ ...product, favorite: false });
              }}
            ></i>
          ) : (
            <i
              class="heart-icon bi bi-heart"
              onClick={() => {
                onFavorite(product_id);
                setProduct({ ...product, favorite: true });
              }}
            ></i>
          )}
          <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6">
              <img
                class="card-img-top mb-5 mb-md-0 bg-light"
                src={"http://localhost:5000/images/" + img_url}
                alt="..."
              />
            </div>
            <div class="col-md-6 ">
              <div class="small mb-1">{category}</div>
              <h1 class="display-5 fw-bolder">{product_name}</h1>
              <div class="fs-5 mb-5">
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
              </div>
              <p class="lead">{product.description}</p>
              <div class="d-flex">
                <input
                  class="form-control text-center me-3"
                  type="num"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  class="btn btn-outline-dark flex-shrink-0"
                  type="button"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 bg-light">
        <div class="container px-4 px-lg-5 mt-5">
          <h2 class="fw-bolder mb-4">Related products</h2>
          <div class="row gy-4 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {getRelatedProducts().map((product) => {
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
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SingleProduct;
