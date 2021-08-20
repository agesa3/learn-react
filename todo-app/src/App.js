import "./App.css";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { uuid } from "uuidv4";

function App() {
  const LOCAL_STORGAE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORGAE_KEY, JSON.stringify(contacts))
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORGAE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddTodo addContactHandler={addContactHandler} />
      <Todo contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}
 
export default App;
