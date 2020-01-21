import React, { useContext } from 'react';
import { AuthContext } from "../../context/Store";

function App() {
  const [auth, setAuth] = useContext(AuthContext)

  return (
    <div className="App">
      <h1><a href="/">Homepage</a></h1>
      <a href="/auth/google">Start OAuth flow</a>
      <p>Logged in: {auth}</p>
    </div>
  );
}

export default App;
