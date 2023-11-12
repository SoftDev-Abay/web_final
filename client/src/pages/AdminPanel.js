import { React, useEffect } from "react";
import ProductsPanel from "../components/ProductsPanel";
import UsersPanel from "../components/UsersPanel";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../sections/Navbar";
import Cart from "../components/Cart";
import Footer from "../sections/Footer";

const AdminPanel = () => {
  const { user } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    } else if (user.admin == false) {
      navigate("/");
    }
  }, []);

  if (user?.admin != true) return null;
  return (
    <>
      {" "}
      <Navbar classNamePosition="position-static" bgDark={true}></Navbar>
      <Cart></Cart>
      <h1 className="text-center mt-5">Admin Panel</h1>
      <UsersPanel />
      <ProductsPanel />
      <Footer></Footer>
    </>
  );
};

export default AdminPanel;
