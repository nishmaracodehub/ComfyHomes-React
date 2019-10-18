import React from "react";

export default function CartItems(props) {
  const { id, title, price, image, amount } = props;
  return (
    <div className="cart-item">
      <img src={require(`../../images/${image}`)} alt="product" />
      <div>
        <h4>{title}</h4>
        <h5>${price}</h5>
        <span className="remove-item" data-id={id}>
          remove
        </span>
      </div>
      <div>
        <i className="fas fa-chevron-up" data-id={id}></i>
        <p className="item-amount">{amount}</p>
        <i className="fas fa-chevron-down" data-id={id}></i>
      </div>
    </div>
  );
}
