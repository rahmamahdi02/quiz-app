import Header from './components/header.js';
import UserForm from './components/user.js';
import Game from './components/game.js';
import './App.css';
import { useState } from "react";

function App() {
  const [user, setUser] = useState("");
  const handleUser = (text) =>{
    setUser(text);
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <p>Welcome to this mini quiz!</p>
    <Header user={user} />
    <UserForm grabUser={handleUser} />
    {user ? <Game /> : null}
      
    </div>
  );
}

export default App;
