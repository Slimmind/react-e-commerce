import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartDropdownVisibility } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <ul className="cart-items">
      {
        cartItems.length ? (
          cartItems.map(cartItem => (
            <li key={cartItem.id}><CartItem item={cartItem}/></li>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )
      }
    </ul>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartDropdownVisibility());
    }}>Go to Checkout</CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));