import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render() {
        return(
            <div>
                <Container title="Benvenuto">
                    <Welcome />
                    <ClickCounter />
                    <Login />
                </Container>
            </div>
            ) 
    }
}