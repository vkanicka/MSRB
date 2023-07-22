import React from 'react';
import './App.css';
import Awareness from './Components/Awareness/Awareness';

function App() {
  return (
    <div className="bg-purple-400 h-screen p-2 overflow-hidden">
      <header className="App-header">
        <h1>MSRB App</h1>
      </header>
      <div className=''>
        <Awareness/>
      </div>

    </div>
  );
}

export default App;
