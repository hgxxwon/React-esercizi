import React, {useState} from "react";
import { Container } from "./Container";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App(){
    const [showCounter, setShowCounter] = useState(true)    
    

    function handleToggleCounter(){
        setShowCounter(s=> !s)
    }

        return(
            <div>
                <Container title="Benvenuto">
                    <Welcome />
                    <button onClick={handleToggleCounter}>Toggle Me!</button>
                    {showCounter && <Counter />}
                </Container>
            </div>
            ) 
    }