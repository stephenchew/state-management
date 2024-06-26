import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Profile = {
  name: string;
};

const initialState: Profile = {
  name: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { updateName } = profileSlice.actions;
export default profileSlice.reducer;

export const profileName = profileSlice.name;
export const profileActions = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
