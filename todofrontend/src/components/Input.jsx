import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeTitle, changeDescription, add } from '../store/todoActions.js'


const ToDo = ({ Title, Description, changeDescription, changeTitle, add }) => {

  
    return (
      <form className="post" style={{marginLeft: "15%", marginRight: "15%", marginBottom: "2%"}}>
        <div className="form-group">
        <input className="form-control" type="text" placeholder="Title" value={Title}
          onChange={ changeTitle }></input>
        </div>
        <div className="form-group">
        <textarea className="form-control" rows="3" placeholder="Description" value={Description}
          onChange={ changeDescription }></textarea>
        </div>
        <button className="btn btn-light btn-sm" type="submit" data-toggle="button" aria-pressed="false"
                onClick={() => add(Title, Description)} >Add ToDo</button>
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
