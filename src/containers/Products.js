import React, { Component } from "react";
import FProducts from "../components/layout/FProducts";
import productsdata from "../products.json";
import Cart from "../components/layout/Cart";

export default class Products extends Component {
  state = {
    data: [],
    cart: [],
    cartTotal: 0
  };

  addToCart = async event => {
    let cart = this.getCart();
    const id = event.target.dataset.id;
    event.target.innerText = "In Cart";
    event.target.disabled = true;
    //get product from products
    let cartItem = { ...this.getProduct(id), amount: 1 };
    // add the product to the cart
    cart = [...cart, cartItem];
    console.log("inside addCart", cart);
    //save the cart in local storage
    this.saveCart(cart);
    // show cart
    this.props.toggleNav();
    // set the state
    await this.setState({
      cart: cart
    });
    console.log("checking state", this.state.cart);
  };

  cartLogic = async event => {
    const { classList } = event.target;
    if (classList.contains("remove-item")) {
      let removeItem = event.target;
      let id = removeItem.dataset.id;
      this.removeItem(id);
    } else if (classList.contains("fa-chevron-up")) {
      let addQuantity = event.target;
      let id = addQuantity.dataset.id;
      let cart = this.getCart();
      let tempItem = cart.find(item => item.id === id);
      tempItem.amount++;
      this.saveCart(cart);
      // set the state
      await this.setState({
        cart: cart
      });
    } else if (classList.contains("fa-chevron-down")) {
      let lowerQuantity = event.target;
      let id = lowerQuantity.dataset.id;
      let cart = this.getCart();
      let tempItem = cart.find(item => item.id === id);
      tempItem.amount--;
      this.saveCart(cart);
      if (tempItem.amount < 1) {
        this.removeItem(id);
      } else {
        await this.setState({
          cart: cart
        });
      }
    }
  };

  removeItem = async id => {
    const bagBtns = [...document.querySelectorAll(".bag-btn")];
    let btn1 = bagBtns.find(btns => btns.dataset.id === id);
    btn1.disabled = false;
    btn1.textContent = "Add to Cart";
    let cart = this.getCart();
    cart = cart.filter(item => item.id !== id);
    this.saveCart(cart);
    await this.setState({
      cart: cart
    });
  };

  clearCart = () => {
    const cartItems = this.state.cart.map(item => item.id);
    for (const id of cartItems) {
      this.removeItem(id);
    }
    //hide the cart
    this.props.toggleNav();
  };

  componentWillMount() {
    let products = productsdata.items.map(product => {
      const { title, price } = product.fields;
      const { id } = product.sys;
      const image = product.fields.image.fields.file.url;
      return { title, id, price, image };
    });

    this.saveProducts(products);

    this.setState({
      data: JSON.parse(localStorage.getItem("products"))
    });
  }

  //Local Storage Methods

  getProduct = id => {
    const products = JSON.parse(localStorage.getItem("products"));
    return products.find(prod => prod.id === id);
  };
  saveProducts = products => {
    return localStorage.setItem("products", JSON.stringify(products));
  };
  saveCart = cart => {
    return localStorage.setItem("cart", JSON.stringify(cart));
  };
  getCart = () => {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  };

  render() {
    const { data } = this.state;
    const cart = this.getCart();
    let cartTotal = 0;
    for (let item of cart) {
      cartTotal += item.price * item.amount;
    }

    return (
      <>
        <section id="products" className="products">
          <div className="section-title">
            <h2>our products</h2>
          </div>
          <div className="products-center">
            {data.map((prod, index) => (
              <FProducts {...prod} key={index} addToCart={this.addToCart} />
            ))}
          </div>
        </section>
        <Cart
          cart={cart}
          cartButton={this.props.cartButton}
          toggleNav={this.props.toggleNav}
          cartTotal={cartTotal}
          cartLogic={this.cartLogic}
          clearCart={this.clearCart}
        />
      </>
    );
  }
}
