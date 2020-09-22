import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { changeTitle, changeDescription, add } from '../store/todoActions.js'


const ToDo = ({ Title, Description, changeDescription, changeTitle, add }) => {


  return (

    <div class="modal fade" id="inputToDo" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add ToDo</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
          <div class="modal-footer">
            <button className="btn btn-light btn-sm" type="submit" data-toggle="button" aria-pressed="false" data-dismiss="modal"
              onClick={() => add(Title, Description)} >Add ToDo</button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    Title: state.todo.Title,
    Description: state.todo.Description
  };
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { changeDescription, changeTitle, add },
  dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
