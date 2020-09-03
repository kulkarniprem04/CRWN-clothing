import CartActionTypes from "./cart.types";

import { addItemToCart } from './cart.utils'

const INITIAL_STATE = {
  hidden: true,
  cartItem: []
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItem: addItemToCart(state.cartItem, action.payload)
      }
    default:
      return state;
  }
};

export default CartReducer;
