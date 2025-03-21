import { Container, Title, Wrapper, TitleWrapper } from '../styles/styles';
import data from '../data/data.json';
import Forecast from '../components/Forecast/Forecast';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { Button } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { fetchWeather } from '../store/slices/citiesSlice';

const Home = () => {
   const { title } = data.home;
   const dispatch = useAppDispatch();
   const cities = useAppSelector((state) => state.cities.cities);

   const handleRefreshAll = () => {
      cities.forEach((city) => {
         dispatch(fetchWeather(city));
      });
   };

   return (
      <Container>
         <TitleWrapper>
            <Title>{title}</Title>
            <Button onClick={handleRefreshAll} variant="contained">
               <RefreshIcon />
            </Button>
         </TitleWrapper>
         <Wrapper>
            {cities.map((city) => (
               <Forecast key={city?.id} city={city} />
            ))}
         </Wrapper>
      </Container>
   );
};

export default Home;
