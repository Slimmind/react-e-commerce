import { CartActionTypes } from "./cart.types";

export const toggleCartDropdownVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_DROPDOWN_VISIBILITY
});

export const addCartItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});