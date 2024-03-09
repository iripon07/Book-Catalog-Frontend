import { createSlice } from "@reduxjs/toolkit";

interface IUserState {
  accessToken: string | null;
  user: {
    _id: string;
    email: string;
  } | null;
}
const initialState: IUserState = {
  accessToken: "",
  user: null,
};

const userSLice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      (state.accessToken = action.payload.accessToken),
        (state.user = action.payload.user);
    },
    userLoggedOut: (state) => {
      (state.accessToken = null),
        (state.user = null),
        localStorage.removeItem("user");
    },
  },
});

export const { userLoggedIn, userLoggedOut } = userSLice.actions;
export default userSLice.reducer;
