import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import { ReactNode } from 'react';

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
   const { isAuthenticated } = useAuth();
   if (!isAuthenticated) {
      return <Navigate to="/auth" replace />;
   }

   return children;
};

export default ProtectedRoute;
