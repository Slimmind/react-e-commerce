import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <ul className="cart-items"></ul>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);

export default CartDropdown;