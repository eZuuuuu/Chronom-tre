import React from 'react';
import './App.css';
import Chronometre from './components/Chronometre/Chronometre';
import ToDolist from './components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <Chronometre/>
      <ToDolist/>
    </div>
  );
}

export default App;
