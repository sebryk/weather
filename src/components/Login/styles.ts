import { styled, Button } from '@mui/material';

export const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
`;

export const Wrapper = styled('div')`
   display: flex;
   flex-direction: column;
   gap: 15px;
   border: 1px solid grey;
   padding: 60px;
   border-radius: 10px;
   background-color: #ffffff;
`;

export const MainButton = styled(Button)`
   height: 50px;
   margin-top: 15px;
`;
