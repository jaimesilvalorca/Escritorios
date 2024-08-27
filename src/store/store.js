import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import useAuthSlice from './authSlice';


const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...useAuthSlice(set, get),
      }),
      {
        name: 'auth-storage', 
        getStorage: () => localStorage, 
      }
    ),
    {
      name: 'store',
    }
  )
);

export default useStore;
