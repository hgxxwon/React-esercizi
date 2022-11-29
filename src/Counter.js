import React from "react";

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
                <h1>Counter: {this.state.count}</h1>
            </div>
        )
    }
}