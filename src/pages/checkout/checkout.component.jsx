import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <header className="checkout-header">
      <ul>
        <li className="header-block">Product</li>
        <li className="header-block">Description</li>
        <li className="header-block">Quantity</li>
        <li className="header-block">Price</li>
        <li className="header-block">Remove</li>
      </ul>
    </header>
    {
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    }
    <div className="total">
      <span>Total: ${cartTotal}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);