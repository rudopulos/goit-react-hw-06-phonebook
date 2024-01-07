// src/components/ContactList/ContactList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../AppRedux/slice';

const ContactList = ({ contacts, onDelete }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.number}
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
