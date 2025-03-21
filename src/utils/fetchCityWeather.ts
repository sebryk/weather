import axios from 'axios';
import { ICity } from '../types/types';
import { getTomorrowDate } from './getTomorowDate';

const API_URL = import.meta.env.VITE_OPEN_METEO_API_URL;

export const fetchCityWeather = async (city: ICity) => {
   try {
      const response = await axios.get(API_URL, {
         params: {
            latitude: city.latitude,
            longitude: city.longitude,
            daily: 'weathercode,temperature_2m_max,temperature_2m_min',
            timezone: 'auto',
            start_date: getTomorrowDate(),
            end_date: getTomorrowDate(),
         },
      });

      return {
         cityId: city.id,
         cityName: city.name,
         maxTemp: Math.round(response.data.daily.temperature_2m_max[0]),
         minTemp: Math.round(response.data.daily.temperature_2m_min[0]),
         weatherCode: response.data.daily.weathercode[0],
      };
   } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
   }
};
