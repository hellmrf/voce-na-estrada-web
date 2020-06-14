import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from "./assets/logo.svg";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
