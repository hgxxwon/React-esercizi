import React from "react";
import { Container } from "./Container";

export class App extends React.Component{
    render() {
        return(
                <Container title="My application">
                    <p>Ciao</p>
                </Container>
            ) 
    }
}