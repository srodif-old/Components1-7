import React from "react";

export class clickTracker extends React.Component {
    state = {

    }
    handleButtonClick = (event) => {
        lastButton = {
            name : event.target.name,
            button : event.target.button
        }
        return lastButton;
    }

    render() {
        return <div>
            <h1>{handleButtonClick().name}<br/>{this.handleButtonClick().button}</h1>

            <button name="b1" onClick={this.handleButtonClick}>b1</button>
            <button name="b2" onClick={this.handleButtonClick}>b2</button>
            <button name="b3" onClick={this.handleButtonClick}>b3</button>
        </div>
    }




}