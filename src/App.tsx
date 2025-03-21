import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Provider } from 'react-redux';
import { store } from './store';
import AppRoutes from './components/Routes/AppRoutes/AppRoutes';

function App() {
   return (
      <Provider store={store}>
         <AuthProvider>
            <BrowserRouter>
               <AppRoutes />
            </BrowserRouter>
         </AuthProvider>
      </Provider>
   );
}

export default App;
