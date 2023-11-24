import React from "react";
import { useStateContext } from "../context/StateContext";

const Navbar = ({ classNamePosition = "", bgDark = false }) => {
  const { user, setShowCart, signOut } = useStateContext();
  return (
    <>
      <nav
        className={`py-3 ${
          classNamePosition.length > 0 ? classNamePosition : "fixed-top"
        } navbar navbar-expand-lg ${
          bgDark ? "bg-dark navbar-dark" : "bg-transparent navbar-light"
        }`}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            <span className="text-warning">Lion</span> Heart
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navmenu">
            <ul className="navbar-nav ms-auto d-flex flex-row justify-content-between">
              <li className="nav-item">
                <a href="/#about" className="nav-link">
                  {" "}
                  About{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="/#new" className="nav-link">
                  {" "}
                  New{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="/#clients" className="nav-link">
                  {" "}
                  Clients{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="/products" className="nav-link">
                  {" "}
                  Products{" "}
                </a>
              </li>
              <li className="nav-item">
                <a href="/search" className="nav-link">
                  {" "}
                  Search{" "}
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-1 ms-lg-5 d-flex flex-row justify-content-between">
              <li
                className="nav-item"
                id="openCart-icon"
                onClick={() => setShowCart(true)}
              >
                <a className="nav-link">
                  <i
                    style={{ cursor: "pointer" }}
                    className="text-warning h5 bi bi-cart-dash"
                  ></i>
                </a>
              </li>
              {user.admin && (
                <li className="nav-item">
                  <a className="nav-link" href="/admin">
                    <i class="text-success h5 bi bi-calendar2"></i>
                  </a>
                </li>
              )}

              <li className="nav-item">
                <a className="nav-link" href="/profile">
                  <i class="h5 bi bi-person"></i>
                </a>
              </li>

              <li className="nav-item" onClick={signOut}>
                <a className="nav-link" href="/login">
                  <i class="h5 text-danger bi bi-box-arrow-right"></i>
                </a>
                {/* hm */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
