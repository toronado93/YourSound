import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

import { RootState } from "../store";

export type RegisterUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

type UserInitialState = {
  //  userObj: RegisterUser;
  status: string;
  error: string | null | undefined;
};

const initialState: UserInitialState = {
  status: "idle",
  error: null,
};

// Creating new user

export const createUser = createAsyncThunk(
  "user/createuser",
  async (userObj: RegisterUser) => {
    const response = await axios.post("/user/newuser", userObj);

    return response.data;
  }
);

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(createUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.status = "success";
        console.log(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.status = "failed";

        // Customized Error
        if (action.error.code === "ERR_BAD_REQUEST") {
          state.error = "User already exist";
        } else {
          state.error = action.error.message;
        }

        console.log(action.error);
      });
  },
});

export const getStatus = (state: RootState) => state.register.status;
export const getError = (state: RootState) => state.register.error;

export default registerSlice.reducer;
