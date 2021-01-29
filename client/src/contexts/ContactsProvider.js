import React, { useContext } from 'react';
import useMyLocalStorage from '../hooks/useLocalStorage';

const ContactsContext = React.createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useMyLocalStorage('contacts', []);

  function createContact(id, name) {
    setContacts(prevContacts => {
      return [...prevContacts, {id, name}]
    })
  }
  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}