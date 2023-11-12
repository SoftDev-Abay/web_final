import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from "react";
import { useStateContext } from "./StateContext";

const Context = createContext();

const ProductsContext = ({ children }) => {
  const { user } = useStateContext();
  const [products, setProducts] = useState([]);

  const getAllProducts = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/user/products/${user.user_id}`
      );
      const json_response = await response.json();
      setProducts(json_response);
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  const isFavoriteProduct = (id) => {
    if (
      products.filter(
        (product) => product?.favorite && product.product_id == id
      ).length > 0
    ) {
      return true;
    }
    return false;
  };
  const onFavorite = useCallback(
    async (product_id) => {
      try {
        const data = {
          user_id: user.user_id,
          product_id: product_id,
        };

        await fetch("http://localhost:5000/favorite", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.product_id === product_id
              ? { ...product, favorite: true }
              : product
          )
        );
      } catch (error) {
        console.error(error);
      }
    },
    [user.user_id]
  );

  const unFavorite = useCallback(
    async (product_id) => {
      try {
        const data = {
          user_id: user.user_id,
          product_id: product_id,
        };

        await fetch("http://localhost:5000/favorite", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.product_id === product_id
              ? { ...product, favorite: false }
              : product
          )
        );
      } catch (error) {
        console.error(error);
      }
    },
    [user.user_id]
  );

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  return (
    <Context.Provider
      value={{ products, onFavorite, unFavorite, isFavoriteProduct }}
    >
      {children}
    </Context.Provider>
  );
};

export const useProductsContext = () => useContext(Context);

export default ProductsContext;
