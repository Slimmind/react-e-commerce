import React from 'react';
import { connect } from 'react-redux';
import { toggleCartDropdownVisibility } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartDropdownVisibility}) => (
  <div className="cart-icon" onClick={toggleCartDropdownVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdownVisibility: () => dispatch(toggleCartDropdownVisibility())
});

export default connect(null, mapDispatchToProps)(CartIcon);