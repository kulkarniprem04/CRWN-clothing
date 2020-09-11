import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./checkout.styles.scss";

import CheckoutItem from "../../components/Checkout-item/checkout-item.component";

// import CartItem from "../../components/cart-item/cart-item.component";
import {
  selectCartItems,
  selectCartItemsTotal
} from "../../Redux/cart/cart.selector";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);
