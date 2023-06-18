import { createSlice } from '@reduxjs/toolkit';
import authOperations from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoadind: false,
  error: null,
  isRefreshing: false,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, handlePending)
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.register.rejected, handleRejected)
      .addCase(authOperations.logIn.pending, handlePending)
      .addCase(authOperations.logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.logIn.rejected, handleRejected)
      .addCase(authOperations.logout.pending, handlePending)
      .addCase(authOperations.logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(authOperations.logout.rejected, handleRejected)
      .addCase(authOperations.refreshUser.pending, state => {
        state.isRefreshing = true;
        handlePending(state);
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.user = action.payload;
        state.isLoggedIn = true;
      })
      .addCase(authOperations.refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        handleRejected(state, action);
      });
  },
});

const { reducer: authReducer } = authSlice;
export default authReducer;
