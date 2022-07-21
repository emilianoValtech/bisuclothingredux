import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/CartIcon';
import CartDropdown from '../../components/cart-dropdown/CartDropdown';
import { CartContext } from '../../contexts/CartContext';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase';
import { selectCurrentUser } from '../../store/user/userSelector';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './styles';
import { useSelector } from 'react-redux';

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
