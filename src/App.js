import React from "react";
import { Route, Routes } from "react-router-dom";
import { Hello } from "./helloWorld";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    
    render() {
        return (<div>
            <Routes>
                <Route path="/" element={<Welcome />}></Route>
            </Routes>
        </div>)
    }
}