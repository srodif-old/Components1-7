import React from 'react';
import { Age } from './Age';
import './index.css';

export class Welcome extends React.Component {
    render({name = "user"}) {
        return <div className='welcome'>
            <p>Welcome, {this.props.name}</p>
            { (this.props.age > 18 
                && this.props.age < 65 
                && this.props.name == "John") ?
                <Age age={this.props.age} />
                : <></>
            }
        </div>
    }
}