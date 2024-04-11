import { useState } from 'react'
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';

import './App.css'

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(initialContacts);
  const addContact = (newContact) => {
    setContacts(
      (currentContacts) => { return [...currentContacts, newContact] }
    )
  };
  
  const [filter, setFilter] = useState('')
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <div>
  <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onAdd={ addContact} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList contacts={filteredContacts}/>
</div>

    </>
  )
}

