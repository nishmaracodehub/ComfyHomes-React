import React from "react";
import logo from "../../images/logo.svg";
import LoginModal from "./LoginModal";

export default function Navbar(props) {
  const { toggleNav } = props;
  const cart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  const cartItems = cart.length;

  const hamButton = () => {
    const hamBtn = document.querySelector(".icon");
    hamBtn.classList.toggle("close");
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#e7e2dd" }}
      >
        <a className="navbar-brand" href="index.html">
          <img src={logo} alt="store logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span id="wrapper" onClick={hamButton}>
            <div className="icon">
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </div>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item mr-4">
              <div className="cart-btn mt-3" onClick={toggleNav}>
                <span className="nav-icon">
                  <i className="fas fa-cart-plus"></i>
                </span>
                <div className="cart-items">{cartItems}</div>
              </div>
            </li>
            <li className="nav-item ml-auto my-auto">
              <button
                className="btn btn-outline-dark"
                style={{ borderColor: "#f09d51" }}
                type="button"
                data-toggle="modal"
                data-target="#loginModal"
              >
                <span>
                  <i className="fas fa-user-circle"></i>
                </span>{" "}
                LOGIN/SIGNUP
              </button>
              <div className="modal fade login" id="loginModal">
                <div className="modal-dialog login animated">
                  <div className="modal-content">
                    <LoginModal />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
