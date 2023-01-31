import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false
    }

    handleInputChange = (event) => {
        
    }
    
    render() {

        return <div>
            <input 
                name="username" 
                value={this.state.username}
                onChange={this.handleInputChange} />
            <input 
                name="password"
                type="password" 
                value={this.state.password}
                onChange={this.handleInputChange} />
            <input 
                name="remember"
                type="checkbox" 
                checked={this.state.remember}
                onChange={this.handleInputChange} />   
        </div>
        

    }
}