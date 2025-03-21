import CryptoJS from 'crypto-js';

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const useEncryption = () => {
   const encrypt = (data: string): string => {
      return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
   };

   const decrypt = (encryptedData: string): string => {
      const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
   };

   return { encrypt, decrypt };
};
