<<<<<<< HEAD
import React from "react";
import { CounterDisplay } from "./CounterDisplay";
=======
import React, { useEffect, useState } from "react"
>>>>>>> 35383f1f54a84eee09d85ce64ed98b5f27a552e6

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)


<<<<<<< HEAD
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
=======
    useEffect(()=> {
        setInterval(() => {
            setCounter(counter => counter + 1)
        }, 1000)

        return () => {
            setCounter(initialValue)
        }
    },[initialValue])
 
         
         return (
             <div>
                 <h1>Counter: {counter}</h1>
             </div>
         )
     }
>>>>>>> 35383f1f54a84eee09d85ce64ed98b5f27a552e6
