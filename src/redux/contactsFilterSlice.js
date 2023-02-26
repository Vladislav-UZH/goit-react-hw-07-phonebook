import { createSlice } from '@reduxjs/toolkit';
// import { addContact, deleteContact, filterContacts } from './actions';

const filterSlice = createSlice({
  initialState: '',
  name: 'filter',
  reducers: {
    filterContacts(state, action) {
      state = action.payload;
      return state;
    },
  },
});
const filterReducer = filterSlice.reducer;
export { filterReducer };
export const { filterContacts } = filterSlice.actions;
