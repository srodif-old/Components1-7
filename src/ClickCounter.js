import React from "react";

export class ClickCounter extends React.Component {
    state = {
        count: this.props.initial
    }

    handleCounterIncrement = () => {
        this.setState( state => {
            return {
                count : this.state.count + this.props.amount
            }
        })
    }

    render() {
        return <div>
            <h3>{this.state.count}</h3>
            <button onClick={this.handleCounterIncrement}>Increase</button>
        </div>
    }
}