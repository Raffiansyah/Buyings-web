import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userData } from '~/utils/type';

interface userState {
  data: null | userData;
}

const initialState: userState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<userData>) => {
      state.data = action.payload;
    },
    signoutUser: (state) => {
      state.data = null;
    },
    updateUser: (state, action: PayloadAction<Partial<userData>>) => {
      if(state.data) {
        state.data = { ...state.data, ...action.payload }
      }
    }
  },
});

export const { registerUser, signoutUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
