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
            <select value={this.state.language} onChange={this.handleLanguage}>
            <option value="en">ENGLISH</option>
            <option value="it">ITALIANO</option>
            </select>
            <LanguageContext.Provider value={this.state.language}>
                <Container title="Benvenuto">
                    <Welcome />
                </Container>
            </LanguageContext.Provider>
            </div>
            ) 
    }
}