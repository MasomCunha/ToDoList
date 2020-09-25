import React from 'react'
import Search from './Search'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeList } from '../store/todoActions.js'

const NavBar = ({ changeList }) => {

    return (
        
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor:"#D3D3D3", marginLeft: "15%", marginRight: "15%", marginBottom:"1%", marginTop:"3%"}}>
            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#inputToDo">Add ToDo</button>
            <button type="button" className="btn btn-outline-secondary" onClick = {() => changeList("all")}>All</button>
            <button type="button" className="btn btn-outline-success" onClick = {() => changeList("Complete")}>Complete</button>
            <button type="button" className="btn btn-outline-warning" onClick = {() => changeList("Incomplete")}>Incomplete</button>
            <Search />
        </nav>

    )
}

const mapDispatchToProps = dispatch => bindActionCreators(
    { changeList }, dispatch
)


export default connect(null, mapDispatchToProps)(NavBar)