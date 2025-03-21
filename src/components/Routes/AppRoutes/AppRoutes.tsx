import { Routes, Route } from 'react-router-dom';
import Auth from '../../../pages/Auth';
import Home from '../../../pages/Home';
import Cities from '../../../pages/Cities';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Layout from '../../Layout/Layout';

const AppRoutes = () => {
   return (
      <Routes>
         <Route path="/auth" element={<Auth />} />
         <Route
            element={
               <ProtectedRoute>
                  <Layout />
               </ProtectedRoute>
            }
         >
            <Route path="/" element={<Home />} />
            <Route path="/cities" element={<Cities />} />
         </Route>
      </Routes>
   );
};

export default AppRoutes;
