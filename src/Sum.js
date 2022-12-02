import React from "react";

export function Sum(props){
    return (
        <div>
            <h1>{[props.number1 + props.number2]}</h1>
        </div>
    )
}