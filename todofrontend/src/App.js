import React from 'react';
import List from './components/List.jsx'
import Input from './components/Input.jsx'
import NavBar from './components/NavBar.jsx'
import Welcome from './components/WelcomeHeader.jsx'
import WithoutList from './components/WithoutList.jsx'
import './App.css';

import { connect } from 'react-redux'


function App({ list }) {


  return (
    <div className="App">
      <Welcome />
      <NavBar />
      <Input />
      { list.length > 0 ?
        <List />
        :
        <WithoutList />
      }

    </div>
  );
}

const mapStateToProps = state => ({
  list: state.todo.list
})

export default connect(mapStateToProps)(App);
