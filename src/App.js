import React, { useState } from "react";
import { Container } from "./Container";
import { GitHubUser } from "./GitHubUser";
import { LanguageContext } from "./LanguageContext";
import { Welcome } from "./Welcome";

export function App(){

    const [language, setLanguage] = useState('en')

    function handleLanguage(event){
        setLanguage(event.target.value)
    }
        return(
            <div>
                <select value={language} onChange={handleLanguage}>
                    <option value="en">english</option>
                    <option value="it">italiano</option>
                </select>
                <LanguageContext.Provider value={language}>
                <Container>
                    <Welcome />
                    <GitHubUser username="hgxxwon" />
                </Container>
                </LanguageContext.Provider>
            </div>
            ) 
    }