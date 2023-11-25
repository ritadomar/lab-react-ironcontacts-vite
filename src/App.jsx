import { useState } from 'react';
import './App.css';
import contactsData from './contacts.json';

function App() {
  // debugger;
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(
    contactsData.slice(5)
  );

  const addRandom = () => {
    const updatedList = [...contacts];
    const randomNr = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomNr];
    updatedList.push(randomContact);
    const filteredContacts = remainingContacts.filter(
      contact => randomContact.id !== contact.id
    );
    setRemainingContacts(filteredContacts);
    console.log(filteredContacts);
    setContacts(updatedList);
  };

  const sortPopularity = () => {
    const sortedContacts = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sortedContacts);
  };

  const sortName = () => {
    const sortedContacts = [...contacts].sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else return 0;
    });
    setContacts(sortedContacts);
  };

  const deleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <div className="actions">
        {' '}
        <button className="primary" onClick={addRandom}>
          Add Random Contact
        </button>
        <button className="sort" onClick={sortPopularity}>
          Sort by popularity
        </button>
        <button className="sort" onClick={sortName}>
          Sort by name
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={`${contact.name}'s picture`}
                    className="contact-picture"
                  />
                </td>
                <td>{contact.name}</td>
                <td>{Math.round(contact.popularity * 100) / 100}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🌟'}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
