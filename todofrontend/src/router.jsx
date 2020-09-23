import React from 'react'
import { BrowserRouter, Switch } from "react-router-dom";
import AuthRoute from './AuthRoute.jsx'
import Login from './Login.jsx'
import ToDoHome from './ToDoHome.jsx'


function Router() {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <AuthRoute exact path="/" type="guest">
                        <Login />
                    </AuthRoute>
                    <AuthRoute path="/home" type="private">
                        <ToDoHome />
                    </AuthRoute>
                </Switch>
            </BrowserRouter>
        </div>
    );
}


export default Router;