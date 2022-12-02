import React from "react";
import { Container } from "./Container";
import { Sum } from "./Sum";
import { Welcome } from "./Welcome";

export class App extends React.Component{
    state = {
        language: 'en'
    }

    handleLanguage = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return(
            <div>
                <Container title="Benvenuto">
                    <Welcome />
                    <Sum number1={9} number2={3} />
                </Container>
            </div>
            ) 
    }
}