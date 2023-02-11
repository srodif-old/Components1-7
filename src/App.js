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
            <Link to="/">Home</Link>
            <Link to="counter">counter</Link>
            <Link to="users/:username">Users</Link>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="counter" element={<ClickCounter />} />
                <Route path="users/:username" element={<ShowGithubUser />} />
                <Route path="*" element={<p>404</p>} />
            </Routes>
        </div>)
    }
}