import React from "react";

export class UnControlledLogin extends React.Component{
    
     _formRef = createRef();

    handleFormSubmit = (event) => {
        event.preventDefault();

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checkbox;
    }

    handleFormPrefill = () => {
        this._formRef.current.elements.username.value = "pre";
        this._formRef.current.elements.password.value = "fill";
        this._formRef.current.elements.remember.checked = true;

    }


    render() {
        return <div>
            <form ref={this._formRef} onSubmit={this.handleFormSubmit}>
                <input name="username" defaultValue="John Dope" />
                <input name="password" type="password" />
                <input name="remember" type="checkbox" defaultValue={true} />
                
                <button type="submit">Login</button>
                <button type="reset">Reset</button>
                <button type="button" onClick={this.handleFormPrefill}>Prefill</button>

            </form>
        </div>
    }
}
