import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ICitiesState, ICity } from '../../types/types';
import { fetchCityWeather } from '../../utils/fetchCityWeather';

export const fetchWeather = createAsyncThunk(
   'cities/fetchWeather',
   async (city: ICity) => await fetchCityWeather(city),
);

const initialState: ICitiesState = {
   cities: [
      {
         id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
         name: 'Москва',
         latitude: '55.7558',
         longitude: '37.6173',
      },
      {
         id: '6fa459ea-ee8a-3ca4-894e-db77e160355e',
         name: 'Санкт-Петербург',
         latitude: '59.9343',
         longitude: '30.3351',
      },
      {
         id: '9c858901-8a57-4791-81fe-4c57b5b9de08',
         name: 'Казань',
         latitude: '55.7964',
         longitude: '49.1088',
      },
      {
         id: 'e4eaaaf2-d142-11e1-b3e4-080027620cdd',
         name: 'Екатеринбург',
         latitude: '56.8389',
         longitude: '60.6057',
      },
   ],
   weather: [],
};

const citiesSlice = createSlice({
   name: 'cities',
   initialState,
   reducers: {
      addCity: (state, action: PayloadAction<ICity>) => {
         state.cities.push(action.payload);
      },
      updateCity: (state, action: PayloadAction<ICity>) => {
         const index = state.cities.findIndex((city) => city.id === action.payload.id);
         state.cities[index] = action.payload;
      },
      deleteCity: (state, action: PayloadAction<string>) => {
         state.cities = state.cities.filter((city) => city.id !== action.payload);
      },
   },
   extraReducers: (builder) => {
      builder.addCase(fetchWeather.fulfilled, (state, action) => {
         const weatherIndex = state.weather.findIndex((w) => w.cityId === action.payload.cityId);

         if (weatherIndex !== -1) {
            state.weather[weatherIndex] = action.payload;
         } else {
            state.weather.push(action.payload);
         }
      });
   },
});

export const { addCity, updateCity, deleteCity } = citiesSlice.actions;
export default citiesSlice.reducer;
