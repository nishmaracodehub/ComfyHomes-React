import React, { Component } from "react";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Products from "./containers/Products";
import Footer from "./components/layout/Footer";

export default class App extends Component {
  state = {
    cartButton: false,
    bagButton: true
    // cartItems: 0,
    // cartTotal: 0
  };
  toggleNav = () => {
    this.setState({
      cartButton: !this.state.cartButton
    });
  };
  // setCartValues = cart => {
  //   console.log("inside setCartValues", cart);
  //   let tempTotal = 0;
  //   let itemsTotal = 0;
  //   cart.map(cartItem => {
  //     tempTotal += cartItem.price * cartItem.amount;
  //     return tempTotal;
  //   });
  //   itemsTotal = cart.length;
  //   this.setState({
  //     cartItems: itemsTotal,
  //     cartTotal: parseFloat(tempTotal.toFixed(2))
  //   });
  // };

  render() {
    return (
      <>
        <Navbar toggleNav={this.toggleNav} cartItems={this.state.cartItems} />
        <Hero />
        <Products
          cartButton={this.state.cartButton}
          toggleNav={this.toggleNav}
          bagButton={this.state.bagButton}
          setCartValues={this.setCartValues}
          cartTotal={this.state.cartTotal}
          toggleshowCart={this.toggleshowCart}
        />
        <Footer />
      </>
    );
  }
}
