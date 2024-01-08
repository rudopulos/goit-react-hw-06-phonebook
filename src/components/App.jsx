// src/components/App.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, setFilter } from '../components/AppRedux/slice';
import { selectContacts, selectFilter } from '../components/AppRedux/selectors';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const addContactHandler = (newContact) => {
    dispatch(addContact(newContact));
  };

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={addContactHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContactHandler} />
    </div>
  );
};

export default App;
