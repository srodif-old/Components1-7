import React from "react";

export class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
        disButton: true
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name] : type == "checkbox" ? checked : value,
            disButton : (username == '' && password == '') ? true : false
        })
    }

    //not sure if intended functionality
    onLogin = (state) => {
        return this.state;
    }

    handleReset = () => {
        this.setState((state) => {
            return {
                username: '',
                password: '',
                checked: false,
                disButton: true
            }
        })
    }
    
    render() {

        const MyStyle = {
            backgroundColor: this.state.password.value.length < 8 ? 'red' : 'green'
        }

        return <div>
            <input 
                name="username" 
                value={this.state.username}
                onChange={this.handleInputChange} 
            />
            <input 
                name="password"
                type="password" 
                value={this.state.password}
                onChange={this.handleInputChange} 
            />
            <input 
                name="remember"
                type="checkbox" 
                checked={this.state.remember}
                onChange={this.handleInputChange} 
            />
            <button style={MyStyle} disabled={this.state.disButton} onClick={this.props.onLogin}>Login</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
        

    }
}