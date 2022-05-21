import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import { Login } from "./Login";
import { Home } from "./Home";
import { UserProvider } from "./userDetails";

// let userDetails = React.createContext(null);

function App() {
  return (
    <UserProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route
           path="/user"
           component={Home} />
      </Switch> 
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;