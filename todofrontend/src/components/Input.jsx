import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeTitle, changeDescription, add } from '../store/todoActions.js'


const ToDo = ({ Title, Description, changeDescription, changeTitle, add }) => {

  
    return (
      <form className="post">
        <input type="text" placeholder="Title" value={Title}
          onChange={ changeTitle }></input>
        <input type="text" placeholder="Description" value={Description}
          onChange={ changeDescription }></input>
        <button type="submit" onClick={() => add(Title, Description)} >Add ToDo</button>
      </form>
    )
  }

const mapStateToProps = state => {
  return {
    Title: state.todo.Title,
    Description: state.todo.Description
    };
}

const mapDispatchToProps = dispatch => bindActionCreators(
  {changeDescription, changeTitle, add},
   dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
