import React from "react";
export function Welcome({name = "Mirko"}){
    return (
        <div>
            <h1>Hello, {name}</h1>
        </div>
    )
}