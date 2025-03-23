import { DialogTitle, DialogContent, DialogActions, TextField, Button, Typography } from '@mui/material';
import data from '../../data/data.json';
import { useState, useEffect, ChangeEvent, FC } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { addCity, updateCity } from '../../store/slices/citiesSlice';
import { ICityPopupProps } from '../../types/types';
import { Container } from './styles';

const CityPopup: FC<ICityPopupProps> = ({ open, onClose, editCity }) => {
   const {
      title,
      city_input,
      latitude_input,
      longitude_input,
      add_button,
      cancel_button,
      error_title,
      edit_title,
      save_button,
   } = data.cities.popup;
   const dispatch = useAppDispatch();
   const [isError, setIsError] = useState(false);
   const [formData, setFormData] = useState({
      id: '',
      name: '',
      latitude: '',
      longitude: '',
   });

   useEffect(() => {
      if (editCity) {
         setFormData(editCity);
      } else {
         setFormData((prev) => ({
            ...prev,
            id: crypto.randomUUID(),
         }));
      }
   }, [editCity, open]);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setIsError(false);
      setFormData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const handleClose = () => {
      setFormData({ id: '', name: '', latitude: '', longitude: '' });
      setIsError(false);
      onClose();
   };

   const handleSubmit = () => {
      if (!formData.name || !formData.latitude || !formData.longitude) {
         setIsError(true);
         return;
      }
      if (editCity) {
         dispatch(updateCity(formData));
      } else {
         dispatch(addCity(formData));
      }
      handleClose();
   };

   return (
      <Container open={open} onClose={handleClose}>
         <DialogTitle>{editCity ? edit_title : title}</DialogTitle>
         <DialogContent>
            <TextField
               name="name"
               value={formData.name}
               onChange={handleChange}
               autoFocus
               margin="dense"
               label={city_input}
               fullWidth
               variant="outlined"
            />
            <TextField
               name="latitude"
               value={formData.latitude}
               onChange={handleChange}
               margin="dense"
               label={latitude_input}
               fullWidth
               variant="outlined"
            />
            <TextField
               name="longitude"
               value={formData.longitude}
               onChange={handleChange}
               margin="dense"
               label={longitude_input}
               fullWidth
               variant="outlined"
            />
            {isError && <Typography sx={{ color: 'red', marginTop: '10px' }}>{error_title}</Typography>}
         </DialogContent>
         <DialogActions>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
               {editCity ? save_button : add_button}
            </Button>
            <Button onClick={handleClose}>{cancel_button}</Button>
         </DialogActions>
      </Container>
   );
};

export default CityPopup;
