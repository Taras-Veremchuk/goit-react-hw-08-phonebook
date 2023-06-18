import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectFilterValue = state => state.filter;
export const selectError = state => state.contacts.error;
// Використовуємо createSelector щоб мемоізувати (запамятати) результат кол-бек ф - ціі
// і щоб не перерендерувати сторінку від залежних значень
export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterValue],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
