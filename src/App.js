import React from "react";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
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
                </Container>
            </div>
            ) 
    }
}