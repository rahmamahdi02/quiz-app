import Header from './components/header.js';
import UserForm from './components/user.js';
import Game from './components/game.js';
import './App.css';
import { useState } from "react";

function App() {

  // state to update user

  const [user, setUser] = useState("");
  const handleUser = (text) =>{
    setUser(text);
  }

  // JSX returns divs for UI
  return (
    <div className="App">
      <h1>Trivia</h1>
      <p>Welcome to this mini quiz!</p>

    <Header user={user} />
    {/* conditional statement, if user submits name => load game */}
    <UserForm grabUser={handleUser} />
    {user ? <Game /> : null}
      
    </div>
  );
}

export default App;
