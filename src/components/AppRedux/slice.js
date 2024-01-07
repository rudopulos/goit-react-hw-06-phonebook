// src/AppRedux/slice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = { contacts: [], filter: '' };

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = appSlice.actions;
export default appSlice.reducer;
