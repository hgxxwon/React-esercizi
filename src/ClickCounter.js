import { useEffect, useState } from "react";

export function ClickCounter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue)


    useEffect(function onCounterChange() {
        console.log(`the current counter is: ${counter}`)
    }, [counter])

    function handleIncrement(){
        setCounter(counter => counter + 1)
    }
    
    return (
        <div>
            <h3>you clicked: {counter} times!</h3>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}