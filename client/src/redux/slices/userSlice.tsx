import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../config/axios";

import { RootState } from "../store";

type Address = {
  country: string | null;
  city: string;
  postal_code: string;
  street: string;
};

type User = {
  id: string;
  username: string;
  email: string;
  phone: number;
  address: Address;
};

type UserInitialState = {
  userObj: User;
  status: string;
  error: string | null | undefined;
};

const initialState: UserInitialState = {
  userObj: {
    id: "",
    username: "",
    email: "",
    phone: 0,
    address: {
      country: "",
      city: "",
      postal_code: "",
      street: "",
    },
  },
  status: "idle",
  error: null,
};

export const fetchUser = createAsyncThunk(
  "user/userprofile",
  async (profileId: string | undefined) => {
    const response = await axios.get("/user/profileId", {
      params: {
        userIDQuery: profileId,
      },
    });

    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        // Can be updated to match maui needs
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "success";
        state.userObj = action.payload.data;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

//

export const userInfo = (state: RootState) => state.user.userObj;
export const userStatus = (state: RootState) => state.user.status;
export const userError = (state: RootState) => state.user.error;
export default userSlice.reducer;
