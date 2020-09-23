import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeList } from '../store/todoActions.js'

const NavBar = ({ changeList }) => {

    return (
        
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor:"#D3D3D3", marginLeft: "15%", marginRight: "15%", marginBottom:"1%"}}>
            <button type="button" className="btn btn-outline-primary" data-toggle="modal" data-target="#inputToDo">Add ToDo</button>
            <button type="button" className="btn btn-outline-secondary" onClick = {() => changeList("all")}>All</button>
            <button type="button" className="btn btn-outline-success" onClick = {() => changeList("Complete")}>Complete</button>
            <button type="button" className="btn btn-outline-warning" onClick = {() => changeList("Incomplete")}>Incomplete</button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "40%" }}>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

const mapDispatchToProps = dispatch => bindActionCreators(
    { changeList }, dispatch
)


export default connect(null, mapDispatchToProps)(NavBar)