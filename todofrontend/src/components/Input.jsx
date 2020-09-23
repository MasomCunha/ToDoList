import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeTitle, changeDescription, add } from '../store/todoActions.js'


const ToDo = ({ Title, Description, userKey, changeDescription, changeTitle, add, user, email, userID }) => {


  return (

    <div className="modal fade" id="inputToDo" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Add ToDo</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="post" style={{ marginLeft: "15%", marginRight: "15%", marginBottom: "2%" }}>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Title" value={Title}
                  onChange={changeTitle}></input>
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="3" placeholder="Description" value={Description}
                  onChange={changeDescription}></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button className="btn btn-light btn-sm" type="submit" data-toggle="button" aria-pressed="false" data-dismiss="modal"
              onClick={() => add(Title, Description, userKey, user, email, userID)} >Add ToDo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    Title: state.todo.Title,
    Description: state.todo.Description,
    userKey: state.auth.userKey,
    user: state.auth.UserName,
    email: state.auth.email,
    userID: state.auth.userID
  };
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { changeDescription, changeTitle, add },
  dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
