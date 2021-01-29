import React from 'react';
import Dashbord from './components/Dashbord';
import Login from './components/Login';
import { ContactsProvider } from './contexts/ContactsProvider';
import { ConversationsProvider } from './contexts/ConversationsProvider';
import { SocketProvider } from './contexts/SocketProvider';
import useMyLocalStorage from './hooks/useLocalStorage';

function App() {
  const [id, setId] = useMyLocalStorage('id');

  const dashbord = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashbord id={id} />
        </ConversationsProvider>
      </ContactsProvider>      
    </SocketProvider>
  )
  return (
    id ? dashbord : <Login onIdSubmit={setId} />
  );
}

export default App;
