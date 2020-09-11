import React from 'react';
import './App.css';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="app">
    <Header className="app-header"></Header>
      <main className="app-main">
        <p>MAIN</p>
      </main>
    </div>
  );
}

export default App;
