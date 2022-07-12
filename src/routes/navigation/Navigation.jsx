import { Outlet, Link } from 'react-router-dom';
import './styles.scss';
import { ReactComponent as BisuLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { CartContext } from '../../contexts/CartContext';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  return (
    <>
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <BisuLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            Shop
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              {' '}
              Sign Out
            </span>
          ) : (
            <Link to='/auth' className='nav-link'>
              Sign In
            </Link>
          )}
          <CartIcon />
          {
            isCartOpen && <CartDropdown />
          }
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
