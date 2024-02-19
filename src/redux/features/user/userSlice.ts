import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  token: string | null;
  user: { _id: string; email: string } | null;
}

const initialState: IUserState = {
  token: "",
  user: null,
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      (state.token = action.payload.token), (state.user = action.payload.token);
    },
  },
});
export const { userLoggedIn } = userSlice.actions;
export default userSlice.reducer;
