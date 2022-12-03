import React, { useEffect, useState } from "react"

export function Counter({initialValue = 0}){
    const [counter, setCounter] = useState(initialValue)


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
