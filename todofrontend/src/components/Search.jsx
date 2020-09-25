import React, { useState } from 'react'
import { fetchSearchTodos, fetchTodos } from '../store/todoActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Search = ({ fetchSearchTodos, userID, userKey, fetchTodos }) => {

    const [inputSearch, setInputSearch] = useState("")

    const handleChange = (e) => {
        setInputSearch(e.target.value)
    }

    const handleClear = () => {
        setInputSearch("")
        fetchData(userKey)
    }

    const fetchData = () => {
        if(inputSearch === "") {
            fetchTodos(userKey)
        } else {
            fetchSearchTodos(userKey, inputSearch, userID)
        }
    }

    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "40%" }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} value={inputSearch} style={{width: "60%"}} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ fetchData }>Search</button>
            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit" onClick={ handleClear }>Clear</button>
        </div>
    )

}


const mapStateToProps = (state) => (
    {
    userKey: state.auth.userKey,
    userID: state.auth.userID
    }
)

const mapDispatchToProps = dispatch => bindActionCreators(
    { fetchSearchTodos, fetchTodos }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Search)