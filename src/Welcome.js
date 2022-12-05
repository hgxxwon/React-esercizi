import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const translation = {
    it: {
        CURRENT_LANGUAGE: 'Benvenuto'
    },

    en: {
        CURRENT_LANGUAGE: 'Welcome'
    }
}

export function Welcome(){
    const language = useContext(LanguageContext)

    return (
        <div>
            <h1>{translation[language]['CURRENT_LANGUAGE']} Mirko!</h1>
        </div>
    )
}