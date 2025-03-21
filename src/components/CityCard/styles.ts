import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const Card = styled('div')`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 20px;
   background: white;
   border-radius: 5px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   width: 100%;
`;

export const TextWrapper = styled('div')`
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 6px;
   @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
   }
`;

export const Title = styled(Typography)`
   font-size: 20px;
   font-weight: 400;
   margin-right: 10px;
   @media (max-width: 440px) {
      font-size: 16px;
   }
`;

export const Text = styled(Typography)`
   font-size: 14px;
   color: rgb(160, 160, 160);
   @media (max-width: 440px) {
      font-size: 12px;
   }
`;

export const ButtonsWrapper = styled('div')`
   display: flex;
   align-items: center;
   gap: 8px;
   @media (max-width: 768px) {
      flex-direction: column;
   }
   @media (max-width: 440px) {
      button {
         font-size: 10px;
      }
   }
`;
