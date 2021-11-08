import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cur) => acc + cur.quantity, 0)
);

export const selectCartVisibility = createSelector(
  [selectCart],
  cart => cart.dropdownVisibility
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
)