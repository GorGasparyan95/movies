import { TStorage } from '../types/hooks';

export const useSessionStorage: TStorage = () => {
  const setItem = (key: string, value: string): void => {
    sessionStorage.setItem(key, value);
  };

  const getItem = (key: string): string | null => {
    const value = sessionStorage.getItem(key);
    return value;
  };

  const removeItem = (key: string): void => {
    sessionStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};
