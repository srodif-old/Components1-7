import { Link } from "react-router-dom";

export function GithubUserList() {
    state = { 
        usern: ''
    }

    const handleChange = (event) => {
        const value = event.target.value;

        this.setState( (state) => {
            return {
                usern : value
            }
        })
    }
    
    return (
        <div>
            <input name="usern" value={this.state.usern} onChange={this.handleChange} ></input>
            <Link to="/:username">{this.state.usern}</Link>
        </div>
    )
}