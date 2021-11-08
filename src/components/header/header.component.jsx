import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartVisibility } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import './header.styles.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg'

const Header = ({currentUser, dropdownVisibility}) => (
  <div className="header">
    <Link to='/' className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">Shop</Link>
      <Link to="/contact" className="option">Contact</Link>
      {
        currentUser
        ? <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
        : <Link to="/sign-in-up" className="option">Sign In</Link>
      }
      <CartIcon />
    </div>
    {
      dropdownVisibility ? <CartDropdown /> : null
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  dropdownVisibility: selectCartVisibility
});

export default connect(mapStateToProps)(Header);