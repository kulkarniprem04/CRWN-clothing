import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { connect } from "react-redux";
import { ToggleDropdown } from "../../Redux/cart/cart.actions";
import { selectCartItemsCount } from "../../Redux/cart/cart.selector";

const CartIcon = ({ ToggleDropdown, itemCount }) => (
  <div className="cart-icon" onClick={ToggleDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  ToggleDropdown: () => dispatch(ToggleDropdown())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
