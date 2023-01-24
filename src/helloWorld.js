import React from 'react'
import { Message } from './Beautiful';

export class Hello extends React.Component {
    render() {
        return <div>
            <h1>Hello, world!</h1>
            <Message />
        </div>;
    }
}