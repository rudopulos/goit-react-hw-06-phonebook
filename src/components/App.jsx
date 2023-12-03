import React, { useReducer } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const initialState = { contacts: [], filter: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return { ...state, contacts: [...state.contacts, action.payload] };
    case 'DELETE_CONTACT':
      return { ...state, contacts: state.contacts.filter((contact) => contact.id !== action.payload) };
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addContact = (newContact) => {
    dispatch({ type: 'ADD_CONTACT', payload: newContact });
  };

  const deleteContact = (id) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  };

  const handleFilterChange = (e) => {
    dispatch({ type: 'SET_FILTER', payload: e.target.value });
  };

  const filteredContacts = state.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={state.contacts} onAddContact={addContact} />
      <h2>Contacts</h2>
      <Filter value={state.filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
