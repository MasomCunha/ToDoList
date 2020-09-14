import React, { useState } from 'react';
import List from './components/List.jsx'
import Input from './components/Input.jsx'
import './App.css';


function App() {

  const [update, setupdate] = useState(false)

  const changeUpdate = () => {
    setupdate(!update)
  }

  return (
    <div className="App">
      <Input changeUpdate={changeUpdate}/>
      <List update={update}/>
    </div>
  );
}

export default App;
