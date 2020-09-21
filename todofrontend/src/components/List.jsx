import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { search, markAsDone, remove } from '../store/todoActions.js'
import './list.css'


const List = ({ list, search, markAsDone, remove }) => {
    
    useEffect(() => {
      search();
   }, [])

    return (

          list.map((e) => {
            return (
                <div className={e.Completed ? 'background-green' : 'background-red'} key={e.id}>
                <h1> {e.id}, { e.Title}, {e.Description}</h1>

              {e.Completed ? <button onClick={ () => markAsDone(e) }>Incomplete</button> : <button onClick={ () => markAsDone(e) }>Complete</button>}

                
                <button onClick={ () => remove(e)}>Delete</button>
                </div>
            )
        }) 

    )

}

const mapStateToProps = state => (
  {
    list: state.todo.list,
    updade: state.update
  }
)

const mapDispatchToProps = dispatch => bindActionCreators(
  { search, markAsDone, remove },
   dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(List)