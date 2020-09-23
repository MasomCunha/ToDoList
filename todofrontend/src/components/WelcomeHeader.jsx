import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../store/authActions.js'

const WelcomeHeader = (props) => {

    const getCurrentDate = () => {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return (<p style={{ float: "left", display: "inline"}}>{year} - {month < 10 ? `0${month}` : `${month}`} - {date}</p>)
    }

    return (
        <div style={{ width: "100%", height: "40%", backgroundColor: "#D3D3D3" }}>
            {getCurrentDate()}

            <div className="btn-group" role="group" style={{ float: "right", display: "inline" }} >
                <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Options
                </button>
                <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <p style={{ cursor: "pointer" }} className="dropdown-item">Perfil</p>
                    <p style={{ cursor: "pointer" }} onClick={ () => {props.logout()}}className="dropdown-item">Log out</p>
                </div>
            </div>

            <h1 style={{ display: "inline" }}>Bem-vindo {props.UserName}</h1>

        </div>
    )

}


const mapStateToProps = (state) => {
    return {
        UserName: state.auth.UserName,
    };
}

const mapDispatchToProps = dispatch => bindActionCreators(
    { logout },
    dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeHeader)