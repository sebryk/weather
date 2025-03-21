import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from '../components/Login/Login';

const Auth = () => {
   const { isAuthenticated } = useAuth();
   if (isAuthenticated) {
      return <Navigate to="/" replace />;
   }

   return <Login />;
};

export default Auth;
