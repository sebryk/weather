import { Card, Title, Text, ButtonsWrapper, TextWrapper } from './styles';
import { Button } from '@mui/material';
import data from '../../data/data.json';
import { ICityCardProps } from '../../types/types';
import { FC } from 'react';

const CityCard: FC<ICityCardProps> = ({ city, onEdit, onDelete }) => {
   const { latitude_input, longitude_input } = data.cities.popup;
   const { edit_button, delete_button } = data.cities.city;

   return (
      <Card>
         <TextWrapper>
            <Title>{city.name}</Title>
            <Text>
               {latitude_input}: {city.latitude}
            </Text>
            <Text>
               {longitude_input}: {city.longitude}
            </Text>
         </TextWrapper>
         <ButtonsWrapper>
            <Button onClick={() => onEdit(city)}>{edit_button}</Button>
            <Button color="error" onClick={() => onDelete(city?.id)}>
               {delete_button}
            </Button>
         </ButtonsWrapper>
      </Card>
   );
};

export default CityCard;
