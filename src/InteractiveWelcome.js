import React, { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome(){
    const [write, setWrite] = useState('')
    const [update, setUpdate] = useState(write)

    const handleChange = (event)=> {
        setWrite(event.target.value)
    }

    const handleClick = ()=> {
        setUpdate(write)
    }

    return (
        <div>
            <Welcome name={update}/>
            <input type="text" name="write" onChange={handleChange} value={write}/>
            <button onClick={handleClick}>Welcome!</button>
        </div>
    )
}