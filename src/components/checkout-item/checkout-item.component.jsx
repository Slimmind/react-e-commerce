import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addCartItem, removeCartItem } from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';


const CheckoutItem = ({ cartItem, clearItem, addCartItem, removeCartItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <button className="arrow" onClick={() => removeCartItem(cartItem)}>&#10094;</button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</button>
      </div>
      <span className="price">{price}</span>
      <div>
        <button className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</button>
      </div>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addCartItem: item => dispatch(addCartItem(item)),
  removeCartItem: item => dispatch(removeCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);