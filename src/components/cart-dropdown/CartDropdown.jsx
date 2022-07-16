import React from 'react';
import './styles.jsx';
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { EmptyMessage, CartDropdownContainer, CartItems } from './styles.jsx';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHanlder = () => {
    navigate('/checkout');
  };
  return (
    <CartDropdownContainer className='cart-dropdown-container'>
      <CartItems className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem CartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHanlder}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
