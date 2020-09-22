import React from 'react'
import LoginModal from './components/LoginModal'
import RegistrationModal from './components/RegistrationModal'

const loggin = () => {

    return(
        <div>
            <button type="button" class="btn btn-primary btn-lg btn-block" data-toggle="modal" data-target="#login">Loggin</button>
            <button type="button" class="btn btn-secondary btn-lg btn-block" data-toggle="modal" data-target="#registration">Registration</button>
            <LoginModal/>
            <RegistrationModal/>
        </div>
    )
}

export default loggin