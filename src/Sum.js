import React from "react";

export function Sum({numbers = [1,2,3]}){
    return (
        <div>
            <h1>{numbers.reduce((a,b)=> a + b, 0)}</h1>
        </div>
    )
}