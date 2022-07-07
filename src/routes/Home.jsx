
import {categories} from '../categories'
import Directory from '../components/directory/Directory'
import {Outlet} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <Outlet />
      <Directory categories={categories}/>
    </div>
  );
};

export default Home;