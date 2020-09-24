import React from 'react'
import { elementToSearch, searchElement } from '../store/searchAction'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const Search = ( { elementToSearch, searchElement } ) => {


    return(
        <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ marginLeft: "40%" }}>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={ elementToSearch }/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onSubmit={ searchElement }>Search</button>
                </form>
            </div>
    )

}


const mapDispatchToProps = dispatch => bindActionCreators(
    { elementToSearch, searchElement }, dispatch
)

export default connect(null, mapDispatchToProps)(Search)