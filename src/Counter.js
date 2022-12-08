import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
   state = {
    count: this.props.count
   }

   constructor(props){
    super(props)

    setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + (this.props.incrementedBy)
            }
        })
    }, this.props.timeout ?? 1000)
   }
   
    render(){
        return (
            <div>
                <CounterDisplay count={this.state.count}/>
            </div>
        )
    }
}