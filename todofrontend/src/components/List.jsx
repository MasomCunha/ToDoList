import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchTodos, markAsDone, remove } from '../store/todoActions.js'



const List = (props) => {

  const userKey = props.userkey

  useEffect(() => {
    const loadFetch = async () => {
      await props.fetchTodos(props.userkey);
    };
    loadFetch(props.userkey);
  }, [props.fetchTodos]);

  return (

    <div className="card" style={{ width: "50%", marginLeft: "25%" }}>
      <ul className="list-group list-group-flush" >

        {props.list.map((e) => {

          if(props.listType === "Complete" && e.Completed) {
            return (
              <li key={e.id} className="list-group-item" style={e.Completed ? { backgroundColor: "#5cb85c" } : { backgroundColor: "#f0ad4e" }}>
                <div style={{ display: "inline-block", float: "left", marginLeft:"10%" }}>
                  <h3> {e.Title} </h3>
                  <p> {e.Description} </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:"5%" }}>
                  {e.Completed ? <button type="button" className="btn btn-warning btn-sm" data-toggle="button" aria-pressed="false"
                    onClick={() => props.markAsDone(e, userKey)}>Incomplete</button> :
                    <button type="button" className="btn btn-success btn-sm" data-toggle="button" aria-pressed="false"
                      onClick={() => props.markAsDone(e, userKey)}>Complete</button>}
                  <button type="button" className="btn btn-danger btn-sm" data-toggle="button" aria-pressed="false"
                    onClick={() => props.remove(e, userKey)}>Delete</button>
                </div>
              </li>
            ) 
          }
          
          if(props.listType === "Incomplete" && !e.Completed) {
            return (
              <li key={e.id} className="list-group-item" style={e.Completed ? { backgroundColor: "#5cb85c" } : { backgroundColor: "#f0ad4e" }}>
                <div style={{ display: "inline-block", float: "left", marginLeft:"10%" }}>
                  <h3> {e.Title} </h3>
                  <p> {e.Description} </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:"5%" }}>
                  {e.Completed ? <button type="button" className="btn btn-warning btn-sm" data-toggle="button" aria-pressed="false"
                    onClick={() => props.markAsDone(e, userKey)}>Incomplete</button> :
                    <button type="button" className="btn btn-success btn-sm" data-toggle="button" aria-pressed="false"
                      onClick={() => props.markAsDone(e, userKey)}>Complete</button>}
                  <button type="button" className="btn btn-danger btn-sm" data-toggle="button" aria-pressed="false"
                    onClick={() => props.remove(e, userKey)}>Delete</button>
                </div>
              </li>
            ) 
          }

          if(props.listType === "all") {
            return (
              <li key={e.id} className="list-group-item" style={e.Completed ? { backgroundColor: "#5cb85c" } : { backgroundColor: "#f0ad4e" }}>
                <div style={{ display: "inline-block", float: "left", marginLeft:"10%" }}>
                  <h3> {e.Title} </h3>
                  <p> {e.Description} </p>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:"5%" }}>
                  {e.Completed ? <button type="button" className="btn btn-warning btn-sm" data-toggle="button" aria-pressed="false"
                    onClick={() => props.markAsDone(e, userKey)}>Incomplete</button> :
                    <button type="button" className="btn btn-success btn-sm" data-toggle="button" aria-pressed="false"
                      onClick={() => props.markAsDone(e, userKey)}>Complete</button>}
                  <button type="button" className="btn btn-danger btn-sm" data-toggle="button" aria-pressed="false"
                    onClick={() => props.remove(e, userKey)}>Delete</button>
                </div>
              </li>
            ) 
          }
        })
        }
      </ul>

    </div>
 
  )

}

const mapStateToProps = state => (
  {
    list: state.todo.list,
    listType: state.todo.listType,
    userkey: state.auth.userKey
  }
)

const mapDispatchToProps = dispatch => bindActionCreators(
  { fetchTodos, markAsDone, remove },
  dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)