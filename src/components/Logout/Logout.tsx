import { Container, MainButton, Wrapper } from './styles';
import data from '../../data/data.json';
import { useAuth } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const Logout = () => {
   const { home, cities, signout } = data;
   const navigate = useNavigate();
   const { logout } = useAuth();
   const { pathname } = useLocation();

   return (
      <Container>
         <Wrapper>
            {pathname === '/' && (
               <MainButton variant="contained" onClick={() => navigate('/cities')}>
                  {home?.button_title}
               </MainButton>
            )}
            {pathname === '/cities' && (
               <MainButton variant="contained" onClick={() => navigate('/')}>
                  {cities?.button_title}
               </MainButton>
            )}
            <MainButton variant="contained" onClick={logout} isAccent={true}>
               {signout?.button_title}
            </MainButton>
         </Wrapper>
      </Container>
   );
};

export default Logout;
