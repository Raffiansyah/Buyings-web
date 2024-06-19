import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.data = action.payload
    },
    signoutUser: (state) => {
      state.data = null
    }
  },
});

export const { registerUser, signoutUser } = userSlice.actions
export default userSlice.reducer;
