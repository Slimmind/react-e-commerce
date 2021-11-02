import { CartActionTypes } from './cart.types';

const INITIAL_STATE = {
  dropdownVisibility: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_DROPDOWN_VISIBILITY:
      return {
        ...state,
        dropdownVisibility: !state.dropdownVisibility
      }
    default:
      return state;
  }
}

export default cartReducer;