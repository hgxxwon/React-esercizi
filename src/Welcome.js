import React from "react";
import { LanguageContext } from "./LanguageContext";

const Strings = {
    en: {
        CURRENT_TITLE: "My application"
    },

    it: {
        CURRENT_TITLE: "La mia applicazione"
    }
}

export class Welcome extends React.Component{
    render(){
        return(
            <div>
                <LanguageContext.Consumer>
                    {(language) => {
                        return <div>{Strings[language].CURRENT_TITLE}</div>
                    }}
                </LanguageContext.Consumer>
            </div>
        )
    }
}
