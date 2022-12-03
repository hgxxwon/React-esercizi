import React from "react";
import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render() {
        return(
            <div>
                <Container title="Benvenuto">
                    <Welcome />
                    <ClickCounter />
                </Container>
            </div>
            ) 
    }
}