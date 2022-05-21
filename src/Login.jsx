import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState("");

  let history = useHistory();

  const { setUsername } = useContext(UserContext);

  const handleName = () => {
    setUsername(name);
    history.push("/user");
  }

  return (
    <div>

      <input type="text" id={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleName}>Sign in</button>
    </div>
  );
}

export { Login };