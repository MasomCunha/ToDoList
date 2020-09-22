import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registration } from '../store/authActions.js'
import { bindActionCreators } from 'redux'

const RegistrationModal = ( { registration } ) => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (

        <div className="modal fade" id="registration" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Registration</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="post" style={{ marginLeft: "15%", marginRight: "15%", marginBottom: "2%" }}>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="UserName" value={user} onChange={handleChangeUser}
                                ></input>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email" value={email} onChange={handleChangeEmail}
                                ></input>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" rows="3" placeholder="password" value={password} onChange={handleChangePassword}></input>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-light btn-sm" type="submit" data-toggle="button" aria-pressed="false" data-dismiss="modal" style={{ marginRight: "45%" }}
                        onClick={() => registration(user, email, password)}>Registration</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(
    { registration }, dispatch
)

export default connect(null, mapDispatchToProps)(RegistrationModal)