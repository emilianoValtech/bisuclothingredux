import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { CartIconContainer, ItemCount, ShoppingIcon } from './styles';

const CartIcon = () => {
  const { setisCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setisCartOpen((prev) => !prev);
  };

  return (
    <CartIconContainer
      className='cart-icon-container'
      onClick={toggleIsCartOpen}
    >
      <ShoppingIcon className='shopping-icon' />
      <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
