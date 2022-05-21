import React, { useState, useMemo, createContext } from 'react';
import './App.css';

const UserContext = createContext();

const UserProvider = (props) => {
  const [username, setUsername] = useState("");

  const value = useMemo(() => ({ username, setUsername }), [username])

  return (
    <div>
      <UserContext.Provider value={value}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
}

export { UserContext, UserProvider };