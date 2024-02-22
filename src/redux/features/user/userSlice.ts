import { createSlice } from "@reduxjs/toolkit";

interface IToken {
  token: string | null;
}

const initialState: IToken = {
  token: localStorage.getItem("accessToken"),
};

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken
    // userLoggedIn: (state, action) => {
    //   (state.token = action.payload.token), (state.user = action.payload.token);
    // },
  },
});
export const { userLoggedIn } = userSlice.actions;
export default userSlice.reducer;
