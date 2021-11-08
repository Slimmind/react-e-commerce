import { CartActionTypes } from "./cart.types";

export const toggleCartDropdownVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN_VISIBILITY
});

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeCartItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});