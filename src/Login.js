import React from "react";

export class Login extends React.Component{
   handleForm = (event) => {
    event.preventDefault()

    const username = event.target.elements.username.value
    const password = event.target.elements.password.value
    const checked = event.target.elements.remember.checked
   } 
    render(){
        return (
            <div>
                <h2>A Simple Form</h2>
                <form onSubmit={this.handleForm}>
                    <input name="username" />
                    <input name="password" type="password" />
                    <input name="remember" type="checkbox"/>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}