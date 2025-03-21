import { Container, City, MainButton } from './styles';
import { ICity } from '../../types/types';
import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { fetchWeather } from '../../store/slices/citiesSlice';
import Temperature from '../Temperature/Temperature';
import RefreshIcon from '@mui/icons-material/Refresh';

const Forecast: FC<{ city: ICity }> = ({ city }) => {
   const dispatch = useAppDispatch();

   const handleRefresh = () => {
      dispatch(fetchWeather(city));
   };

   useEffect(() => {
      dispatch(fetchWeather(city));

      const interval = setInterval(() => {
         dispatch(fetchWeather(city));
      }, 5000);

      return () => clearInterval(interval);
   }, [city, dispatch]);

   return (
      <Container>
         <City>{city?.name}</City>
         <Temperature cityId={city.id} />
         <MainButton onClick={handleRefresh} size="small">
            <RefreshIcon />
         </MainButton>
      </Container>
   );
};

export default Forecast;
