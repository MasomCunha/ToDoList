import React, { useState } from 'react'
import { RegistrationValidation, registration } from '../util/util'




const RegistrationModal = () => {

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})
    

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

  

    const contactSubmit = (e) => {
        e.preventDefault();

        const isValid = RegistrationValidation(user, email, password)
    
        if (isValid === true) {
            registration(user, email, password)
            alert(user + " Added!");
            setUser("")
            setPassword("")
            setEmail("")
            setErrors("")
        } else {
            setErrors(isValid)
        }
    
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
                                <input className="form-control" type="text" placeholder="UserName" value={user} onChange={ (e) => handleChangeUser(e)}
                                ></input>
                                 <span style={{color: "red"}}>{errors["name"]}</span>
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="email" placeholder="Email" value={email} onChange={ (e) => handleChangeEmail(e)}
                                ></input>
                                 <span style={{color: "red"}}>{errors["email"]}</span>
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" rows="3" placeholder="password" value={password} onChange={ (e) => handleChangePassword(e) }></input>
                            </div>
                            <span style={{color: "red"}}>{errors["password"]}</span>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-light btn-sm" type="submit" data-toggle="button" aria-pressed="false" style={{ float:"left" }}
                        onClick={ (e) => contactSubmit(e)}
                        >Registration</button>
                         <button className="btn btn-light btn-sm" type="submit" data-toggle="button" aria-pressed="false" data-dismiss="modal" style={{ float:"right" }}
                        >Go Back</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default RegistrationModal