import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AppState } from '../store';
import { Insurance } from '../../../services/insurances';

const initialState: AppState['insurance'] = {
  insurances: undefined,
};

const insuranceSlice = createSlice({
  name: 'insurance',
  initialState: initialState,
  reducers: {
    setInsurances(state, action: PayloadAction<Insurance[]>) {
      state.insurances = action.payload;
    },
  },
});

export const insuranceName = insuranceSlice.name;
export const insuranceActions = insuranceSlice.actions;
export const insuranceReducer = insuranceSlice.reducer;
