import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Hei, og velkommen :)
        </h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Foreløpig er det ikke noe annet å gjøre her enn å se på denne
          fine animasjonen 
        </p>
      </header>
    </div>
  );
}

export default App;
