import React from "react";

export default function Hero(props) {
  const showProducts = () => {
    const productsDOM = document.querySelector(".products-center");
    productsDOM.scrollIntoView();
  };
  return (
    <>
      <header className="hero">
        <div className="banner">
          <h1 className="banner-title">Furniture Collection</h1>
          <button className="banner-btn" onClick={showProducts}>
            Shop now
          </button>
        </div>
      </header>
    </>
  );
}
