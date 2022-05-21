import React, { useContext } from 'react';
import { UserContext } from "./userDetails"

function Home() {
  const { username } = useContext(UserContext);
  return (
    <div>
      {username ? `Hello ${username}` : "Unauthorized"}
    </div>
  );
}

export { Home };