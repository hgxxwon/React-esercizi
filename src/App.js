import React from "react";
import { Age } from "./Age";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render() {
        return(
            <div>
                <Welcome name={[<strong>Mirko</strong>]} age={19}/>
            </div>
            ) 
    }
}