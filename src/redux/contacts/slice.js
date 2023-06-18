import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(contactsOperations.fetchContacts.pending, handlePending)
      .addCase(contactsOperations.fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(contactsOperations.fetchContacts.rejected, handleRejected)
      .addCase(contactsOperations.deleteContact.pending, handlePending)
      .addCase(contactsOperations.deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(contactsOperations.deleteContact.rejected, handleRejected)
      .addCase(contactsOperations.addContact.pending, handlePending)
      .addCase(contactsOperations.addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(contactsOperations.addContact.rejected, handleRejected);
  },
});
export const { reducer: contactsReducer } = contactsSlice;
