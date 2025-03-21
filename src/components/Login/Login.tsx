import { TextField } from '@mui/material';
import { Container, Wrapper, MainButton } from './styles';
import data from '../../data/data.json';
import { useState, ChangeEvent } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Typography } from '@mui/material';

const Login = () => {
   const { login } = useAuth();
   const { login_input, name_input, button_title, error_title } = data.signin;
   const [isError, setIsError] = useState(false);
   const [formData, setFormData] = useState({
      login: '',
      name: '',
   });

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleSubmit = () => {
      if (!formData.login || !formData.name) {
         setIsError(true);
         return;
      }
      localStorage.setItem('userData', JSON.stringify(formData));
      login(formData);
   };

   return (
      <Container>
         <Wrapper>
            <TextField
               name="login"
               label={login_input}
               variant="outlined"
               value={formData.login}
               onChange={handleChange}
            />
            <TextField
               name="name"
               label={name_input}
               variant="outlined"
               value={formData.name}
               onChange={handleChange}
            />
            {isError && <Typography sx={{ color: 'red' }}>{error_title}</Typography>}
            <MainButton variant="contained" onClick={handleSubmit}>
               {button_title}
            </MainButton>
         </Wrapper>
      </Container>
   );
};

export default Login;
