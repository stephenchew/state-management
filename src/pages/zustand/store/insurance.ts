import { Insurance } from '../../../services/insurances';
import { create } from 'zustand';

type Forsikring = {
  insurances: Insurance[] | undefined;
  setInsurances: (insurances: Insurance[]) => void;
};

export const useInsuranceStore = create<Forsikring>((set) => ({
  insurances: undefined,
  setInsurances: (insurances) => set({ insurances }),
}));
