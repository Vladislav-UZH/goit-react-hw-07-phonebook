import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { addContact, deleteContact, filterContacts } from './actions';
const contactsInitState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '098-396-56-58' },
  { id: 'id-2', name: 'Hermione Kline', number: '050-966-23-50' },
  { id: 'id-3', name: 'Eden Clements', number: '099-663-10-22' },
  { id: 'id-4', name: 'Annie Copeland', number: '099-423-66-19' },
];
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,

  reducers: {
    addContact(state, action) {
      const contact = { ...action.payload, id: nanoid(6) };
      state.push(contact);
    },
    deleteContact(state, action) {
      const index = state.find(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers: {},
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
