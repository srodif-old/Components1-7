import React from "react";
import { LanguageContext } from "./LanguageContext";

export class DisplayLanguage extends React.Component {
    render() {
        return (
            <LanguageContext.Consumer>
                {value => (
                    <h1>Selected Language: {value.language}</h1>
                )}
            </LanguageContext.Consumer>
        );
    }
}