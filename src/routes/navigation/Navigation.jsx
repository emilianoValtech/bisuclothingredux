import { Outlet, Link } from 'react-router-dom';
import './styles.scss';
import { ReactComponent as BisuLogo } from '../../assets/crown.svg';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { signOutUser } from '../../utils/firebase/firebase';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
            <span className='nav-link' onClick={signOutUser}> Sign Out</span>
          ) : (
            <Link to='/auth' className='nav-link'>
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
