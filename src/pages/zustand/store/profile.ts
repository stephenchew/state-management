import { create } from 'zustand';

type Profile = {
  name: string;
  setName: (name: string) => void;
};

export const useProfileStore = create<Profile>((set) => ({
  name: '',
  setName: (name) => set({ name }),
}));
