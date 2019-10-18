import React from "react";

export default function FProducts(props) {
  const { id, title, price } = props;
  const img = require(`../../images/${props.image}`);

  return (
    <article className="product">
      <div className="img-container">
        <img src={img} alt="product" className="product-img" />
        <button className="bag-btn" data-id={id} onClick={props.addToCart}>
          <i className="fas fa-shopping-cart"></i>
          add to cart
        </button>
      </div>
      <h3>{title}</h3>
      <h4>${price}</h4>
    </article>
  );
}
