import { Outlet } from 'react-router-dom';
import Logout from '../Logout/Logout';
const Layout = () => {
   return (
      <>
         <Logout />
         <Outlet />
      </>
   );
};

export default Layout;
