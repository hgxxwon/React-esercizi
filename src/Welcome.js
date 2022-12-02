import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        CURRENT_TITLE: "You chosed English"
    },

    it: {
        CURRENT_TITLE: "Hai scelto l'Italiano"
    }
}

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {(language) => {
                        return <div><h1>{Strings[language].CURRENT_TITLE}</h1></div>
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}
