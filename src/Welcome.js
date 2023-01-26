import React from 'react'

export class Welcome extends React.Component {
    render({name = "user"}) {
        return <p>Welcome, {this.props.name}</p>
    }
}