import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { IUser } from '../types/types';
import { AuthContextType } from '../types/types';
import { useEncryption } from '../hooks/useEncryption';

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const { encrypt, decrypt } = useEncryption();
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const encryptedData = localStorage.getItem('userData');
      if (encryptedData) {
         const decryptedData = decrypt(encryptedData);
         const userData = JSON.parse(decryptedData);
         if (userData) {
            setIsAuthenticated(true);
         }
      }
      setIsLoading(false);
   }, []);

   const login = (data: IUser) => {
      const encryptedData = encrypt(JSON.stringify(data));
      localStorage.setItem('userData', encryptedData);
      setIsAuthenticated(true);
   };

   const logout = () => {
      localStorage.removeItem('userData');
      setIsAuthenticated(false);
   };

   if (isLoading) {
      return null;
   }

   return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw new Error('The useAuth hook must be used inside the AuthProvider component');
   }
   return context;
};

export default AuthContext;
