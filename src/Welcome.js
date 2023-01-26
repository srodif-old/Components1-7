import React from 'react'

export class Welcome extends React.Component {
    render({name = "user"}) {
        return <div>
            <p>Welcome, {this.props.name}</p>
            <p>Your age is {this.props.age}</p>
        </div>
    }
}