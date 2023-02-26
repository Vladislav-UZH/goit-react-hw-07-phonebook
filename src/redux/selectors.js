import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => {
  // console.log('contacts: ', state.contacts);
  return state.contacts;
};
const getFilter = state => state.filter;
const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filterValue) => {
    // console.log('filter value: ', filterValue);
    const normalizedFilter = filterValue.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
export { getContacts, getFilteredContacts, getFilter };
