import React from "react";
import { Container } from "./Container";
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    render() {
        return(
            <div>
                <Container title="Benvenuto">
                    <Welcome />
                    <Sum numbers={[1,5,9]} />
                </Container>
            </div>
            ) 
    }
}