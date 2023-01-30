import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component {
    state = {
        count: this.props.initial
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: this.state.count + this.props.amount
                }
            })
        }, this.props.interval)
    }

    render() {
        return <CounterDisplay count = {this.state.count} />
    }
}