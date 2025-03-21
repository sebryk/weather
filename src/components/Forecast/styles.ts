import { styled } from '@mui/material';
import { Button } from '@mui/material';

export const Container = styled('div')`
   position: relative;
   width: 100%;
   height: 80px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: #f5f5f5;
   padding: 0 30px;
   border-radius: 5px;
   flex-shrink: 0;
   color: #000000;
   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
   path {
      fill: #000000;
   }
`;

export const City = styled('h2')`
   font-size: 20px;
   font-weight: 400;
   @media (max-width: 768px) {
      font-size: 20px;
      text-align: center;
   }
`;

export const Day = styled('p')`
   font-size: 20px;
   font-weight: 400;
`;

export const WeatherWrapper = styled('div')`
   display: flex;
   align-items: center;
   gap: 10px;
`;

export const Degree = styled('p')`
   font-size: 30px;
   font-weight: 400;
   @media (max-width: 768px) {
      font-size: 25px;
      text-align: center;
   }
`;

export const MainButton = styled(Button)`
   top: 0;
   right: -15px;
   background-color: transparent;
   border: none;
   cursor: pointer;
   position: absolute;
   transition: 0.3s ease;
   svg {
      width: 20px;
      height: 20px;
   }
   &:hover {
      opacity: 0.6;
   }
`;
