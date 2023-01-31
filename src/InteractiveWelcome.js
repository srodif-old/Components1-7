import React from "react";
import { Welcome } from "./Welcome";

export class InteractiveWelcome extends React.Component {
    state = {
        name: ''
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name] : value
        })
    }



    render() {
        return <div>
            <input name="name" value={this.state.name} onClick={this.handleInput} />
            <Welcome name={this.state.name} />
        </div>
        

    }
}