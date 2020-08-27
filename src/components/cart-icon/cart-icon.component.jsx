import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ToggleDropdown } from "../../Redux/cart/cart.actions";

const CartIcon = ({ ToggleDropdown }) => (
  <div className="cart-icon" onClick={ToggleDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  ToggleDropdown: () => dispatch(ToggleDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);
