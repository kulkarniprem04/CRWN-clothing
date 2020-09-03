import React from "react";
import "./collection-item.styles.scss";
import { connect } from 'react-redux'

import { addItem } from '../../Redux/cart/cart.actions'

import CustomButton from "../custom-button/custom-button.component";

const Collectionitem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item
  return (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton onClick={() => addItem(item)} inverted>Add To Cart</CustomButton>
  </div>
)
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(Collectionitem);
