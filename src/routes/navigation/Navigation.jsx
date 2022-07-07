import { Outlet, Link } from 'react-router-dom';
import './styles.scss'
import {ReactComponent as BisuLogo} from '../../assets/crown.svg'

const Navigation = () => {
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
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
