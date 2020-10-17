import React from "react";
import "./checkout-item.styles.scss";

import { connect } from "react-redux";
import {
  clearItemFromcart,
  AddItem,
  RemoveItem
} from "../../Redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromcart(item)),
  addItem: item => dispatch(AddItem(item)),
  removeItem: item => dispatch(RemoveItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
