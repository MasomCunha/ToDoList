import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeList } from '../store/todoActions.js'

const NavBar = ({ changeList }) => {

    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ marginLeft: "15%", marginRight: "15%", marginBottom:"1%"}}>
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#inputToDo">Add ToDo</button>
            <button type="button" class="btn btn-outline-secondary" onClick = {() => changeList("all")}>All</button>
            <button type="button" class="btn btn-outline-success" onClick = {() => changeList("Complete")}>Complete</button>
            <button type="button" class="btn btn-outline-warning" onClick = {() => changeList("Incomplete")}>Incomplete</button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "40%" }}>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

    )
}

const mapDispatchToProps = dispatch => bindActionCreators(
    { changeList }, dispatch
)


export default connect(null, mapDispatchToProps)(NavBar)