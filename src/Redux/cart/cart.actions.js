import cartActionTypes from "./cart.types";

export const ToggleDropdown = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = item => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item
})
