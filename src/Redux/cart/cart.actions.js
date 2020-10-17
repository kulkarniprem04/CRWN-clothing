import cartActionTypes from "./cart.types";

export const ToggleDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN
});

export const AddItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
});

export const RemoveItem = item => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: item
});

export const clearItemFromcart = item => ({
  type: cartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});
