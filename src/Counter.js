import React from "react";
import { CounterDisplay } from "./CounterDisplay";

export class Counter extends React.Component{
   state = {
    count: this.props.count
   }

   constructor(props){
    super(props)

   this._interval = setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + (this.props.incrementedBy)
            }
        })
    }, this.props.timeout ?? 1000)
   }

   componentWillUnmount(){
    if(this.state.count) {
        clearInterval(this._interval)
    }
   }
   
    render(){
        return (
            <div>
                <CounterDisplay count={this.state.count}/>
            </div>
        )
    }
}