import React, { useState } from 'react'
import { fetchSearchTodos } from '../store/todoActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Search = ({ fetchSearchTodos, userID, userKey }) => {

    const [inputSearch, setInputSearch] = useState("")

    const handleChange = (e) => {
        setInputSearch(e.target.value)
    }


    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "40%" }}>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} style={{width: "60%"}} />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ () => fetchSearchTodos(userKey, inputSearch, userID)}>Search</button>
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
    { fetchSearchTodos }, dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Search)