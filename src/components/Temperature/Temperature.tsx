import { FC } from 'react';
import { Degree, WeatherWrapper } from '../Forecast/styles';
import { useAppSelector } from '../../hooks/redux';
import SunnyIcon from '../../assets/icons/sunny.svg';
import RainyIcon from '../../assets/icons/rainy.svg';
import SnowIcon from '../../assets/icons/snowing.svg';
import FoggyIcon from '../../assets/icons/foggy.svg';
import Cloudy from '../../assets/icons/cloudy.svg';
import { getWeatherCategory } from '../../utils/getWeatherCategory';

const weatherIcons = [<SunnyIcon />, <Cloudy />, <RainyIcon />, <SnowIcon />, <FoggyIcon />];

const Temperature: FC<{ cityId: string }> = ({ cityId }) => {
   const weatherData = useAppSelector((state) => state.cities.weather.find((weather) => weather.cityId === cityId));
   const weatherCategory = getWeatherCategory(weatherData?.weatherCode ?? -1);

   return (
      <WeatherWrapper>
         {weatherCategory !== -1 && (weatherIcons[weatherCategory] || <SunnyIcon />)}
         <Degree>{weatherData ? `${weatherData.maxTemp}°` : '--°'}</Degree>
      </WeatherWrapper>
   );
};

export default Temperature;
