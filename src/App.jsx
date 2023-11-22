import { useState } from 'react';
import './App.css';
import contactsData from './contacts.json';

function App() {
  const fiveContacts = contactsData.slice(0, 5);
  const [contacts, setContacts] = useState(fiveContacts);
  debugger;

  const addRandom = () => {
    const otherContacts = contactsData.slice(5);
    const randomContact =
      otherContacts[Math.floor(Math.random * otherContacts.length)];

    const newList = [...fiveContacts].push(randomContact);
    setContacts(newList);
  };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
