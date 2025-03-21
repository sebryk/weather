import { styled, Button } from '@mui/material';

export const Container = styled('div')`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   background: #ffffff;
   height: 60px;
   padding: 0 10px;
`;

export const Wrapper = styled('div')`
   display: flex;
   justify-content: space-between;
   gap: 6px;
`;

export const MainButton = styled(Button, {
   shouldForwardProp: (prop) => prop !== 'isAccent'
})<{ isAccent?: boolean }>`
   background: ${({ isAccent }) => (isAccent ? '#ffffff' : '')};
   color: ${({ isAccent }) => (isAccent ? '#1976d2' : '')};
   transition: 0.3s ease-in-out;
   &:hover {
      opacity: ${({ isAccent }) => (isAccent ? '0.8' : '1')};
   }
   height: 40px;
`;
