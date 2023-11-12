import "./App.css";

import { React } from "react";
import { StateContext } from "./context/StateContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminPanel from "./pages/AdminPanel";
import Profile from "./pages/Profile";
import ProductsContext from "./context/ProductsContext";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <>
      <StateContext>
        <ProductsContext>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Main />} />
              <Route
                path="/products"
                element={
                  <>
                    <Products></Products>
                  </>
                }
              />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/product/:id" element={<SingleProduct />} />
            </Routes>
          </Router>
        </ProductsContext>
      </StateContext>
    </>
  );
}

export default App;
