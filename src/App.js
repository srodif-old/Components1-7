import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hello } from "./helloWorld";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGihubUser";
import { Link } from "react-router-dom";

export class App extends React.Component{
    
    render() {
        return (<div>
            <Link to="/"></Link>
            <Link to="counter"></Link>
            <Link to="users/:username"></Link>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="counter" element={<ClickCounter />} />
                <Route path="users/:username" element={<ShowGithubUser />} />
            </Routes>
        </div>)
    }
}