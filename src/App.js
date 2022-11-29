import React from "react";
import { Counter } from "./Counter";

export class App extends React.Component{
    render() {
        return(
            <div>
                <Counter count={0} incrementedBy={5} timeout={2000}/>
            </div>
            ) 
    }
}