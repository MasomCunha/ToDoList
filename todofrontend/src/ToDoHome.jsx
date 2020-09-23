import React from 'react'
import List from './components/List.jsx'
import Input from './components/Input.jsx'
import NavBar from './components/NavBar.jsx'
import Welcome from './components/WelcomeHeader.jsx'


import { connect } from 'react-redux'

function ToDoHome({ list }) {

    return (
      <div>
        <Welcome />
        <NavBar />
        <Input />
        <List />
      </div>
    );
  }

  const mapStateToProps = state => ({
    list: state.todo.list
  })
  
  export default connect(mapStateToProps)(ToDoHome);