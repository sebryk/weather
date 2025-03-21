import { styled } from '@mui/material';

export const Container = styled('div')`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px 0;
`;

export const Wrapper = styled('div')`
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding: 20px;
   gap: 10px;
`;

export const Title = styled('h1')`
   font-size: 40px;
   font-weight: 400;
   color: #ffffff;
   padding: 10px 0;
   border-radius: 5px;
   text-transform: uppercase;
   @media (max-width: 768px) {
      font-size: 30px;
      text-align: center;
   }
`;

export const TitleWrapper = styled('div')`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 20px;
   @media (max-width: 768px) {
      flex-direction: column;
   }
`;
