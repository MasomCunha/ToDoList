import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './Login'
import ToDoHome from './ToDoHome.jsx'


function Router() {

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Login />
                    </Route>
                    <Route path="/home">
                        <ToDoHome />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}


export default Router;