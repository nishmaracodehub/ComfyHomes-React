import React from "react";
import CartItems from "./CartItems";

export default function Cart(props) {
  const { cart, cartButton, toggleNav, cartTotal, cartLogic } = props;

  return (
    <div className={cartButton ? "cartOverlay transparentBcg" : "cartOverlay"}>
      <div className={cartButton ? "cart showCart" : "cart"}>
        <span className="close-cart" onClick={toggleNav}>
          <i className="fas fa-window-close"> </i>
        </span>
        <h2>Your Cart</h2>
        <div className="cart-content" onClick={cartLogic}>
          {cart
            ? cart.map((cartItem, index) => (
                <CartItems key={index} {...cartItem} />
              ))
            : null}
        </div>
        <div className="cart-footer">
          <h3>
            your total : $ <span className="cart-total">{cartTotal}</span>
          </h3>
          <button className="clear-cart banner-btn" onClick={props.clearCart}>
            clear cart
          </button>
        </div>
      </div>
    </div>
  );
}
