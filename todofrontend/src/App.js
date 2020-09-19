import React, { useState } from 'react';
import ListToDos from './components/List.jsx'
import Input from './components/Input.jsx'
import './App.css';


function App() {

  const [update, setupdate] = useState(false)

  const changeUpdate = () => {
    setupdate(!update)
  }

  return (
    <div className="App">
      <h1>Bem vindo userName!</h1>
      <Input changeUpdate={changeUpdate}/>
      <ListToDos update={update}/>
    </div>
  );
}

export default App;
