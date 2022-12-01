import React from "react";

export class Login extends React.Component{
   handleForm = (event) => {
    event.preventDefault()
   } 
    render(){
        return (
            <div>
                <h2>A Simple Form</h2>
                <form onSubmit={this.handleForm}>
                    <input autoFocus name="username" /> {/*added autofocus*/}
                    <input name="password" type="password" />
                    <input name="remember" type="checkbox"/>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </form>
            </div>
        )
    }
}