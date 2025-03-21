import { Wrapper, Container, Title, TitleWrapper } from '../styles/styles';
import { Button } from '@mui/material';
import data from '../data/data.json';
import CityPopup from '../components/CityPopup/CityPopup';
import { usePopup } from '../hooks/usePopup';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import CityCard from '../components/CityCard/CityCard';
import { deleteCity } from '../store/slices/citiesSlice';
import { useState } from 'react';
import { ICity } from '../types/types';

const Cities = () => {
   const { title } = data.cities;
   const { isOpen, handleOpen, handleClose } = usePopup();
   const [editingCity, setEditingCity] = useState<ICity | null>(null);
   const cities = useAppSelector((state) => state.cities.cities);
   const dispatch = useAppDispatch();

   const handleEdit = (city: ICity) => {
      setEditingCity(city);
      handleOpen();
   };

   const handleDelete = (id: string) => {
      dispatch(deleteCity(id));
   };

   const handleClosePopup = () => {
      setEditingCity(null);
      handleClose();
   };

   return (
      <Container>
         <TitleWrapper>
            <Title>{title}</Title>
            <Button variant="contained" onClick={handleOpen}>
               {data.cities.add_button}
            </Button>
         </TitleWrapper>
         <Wrapper>
            {cities.map((city: ICity) => (
               <CityCard key={city?.id} city={city} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
            <CityPopup open={isOpen} onClose={handleClosePopup} editCity={editingCity || undefined} />
         </Wrapper>
      </Container>
   );
};

export default Cities;
