import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type Profile = {
  name: string;
  setName: (name: string) => void;
};

export const useProfileStore = create<Profile, [['zustand/devtools', never]]>(
  devtools((set) => ({
    name: '',
    setName: (name) => set({ name }),
  })),
);
