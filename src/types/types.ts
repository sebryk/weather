export interface IUser {
   login: string;
   name: string;
}

export interface ICity {
   id: string;
   name: string;
   latitude: string;
   longitude: string;
}

export interface IWeather {
   cityId: string;
   cityName: string;
   maxTemp: number;
   minTemp: number;
   weatherCode: number;
}

export interface ICitiesState {
   cities: ICity[];
   weather: IWeather[];
}

export interface AuthContextType {
   isAuthenticated: boolean;
   login: (data: IUser) => void;
   logout: () => void;
}

export interface ICityCardProps {
   city: ICity;
   onEdit: (city: ICity) => void;
   onDelete: (id: string) => void;
}

export interface ICityPopupProps {
   open: boolean;
   onClose: () => void;
   editCity?: ICity;
}
