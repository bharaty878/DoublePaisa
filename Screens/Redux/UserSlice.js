import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: 0, // Initialize as null instead of an empty array
  },
  reducers: {
    addUser(state, action) {
      state.data = action.payload; // Update the data with the new value
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;





