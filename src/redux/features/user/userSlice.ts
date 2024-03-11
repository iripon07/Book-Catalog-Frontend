import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IToken {
  token: string | null;
}

const initialState: IToken = {
  token: localStorage.getItem("accessToken"),
};

const userSLice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { removeToken, setToken } = userSLice.actions;
export default userSLice.reducer;
