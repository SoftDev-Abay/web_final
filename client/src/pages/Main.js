import React, { useEffect } from "react";
import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import SaleTimer from "../components/SaleTimer";
import Showcase from "../sections/Showcase";
import TopProduct from "../sections/TopProduct";
import Clients from "../sections/Clients";
import Services from "../components/Services";
import Subscribe from "../sections/Subscribe";
import Footer from "../sections/Footer";
import Cart from "../components/Cart";
import Slider from "../components/Slider";
import { useStateContext } from "../context/StateContext";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";

const Main = () => {
  const navigate = useNavigate();
  const { user } = useStateContext();

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, []);

  if (user === null) return null;

  return (
    <>
      <Navbar></Navbar>
      <Cart></Cart>
      <Hero></Hero>
      <SaleTimer></SaleTimer>
      <Showcase></Showcase>
      <Slider />
      <Services></Services>
      <Subscribe></Subscribe>
      <Clients></Clients>
      <TopProduct></TopProduct>

      <Footer></Footer>
    </>
  );
};

export default Main;
