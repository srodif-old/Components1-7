import React from "react";
import { LanguageContext } from "./LanguageContext";

export class LanguageProvider extends React.Component {
    state = {
        language: "English"
    };

    handleLanguageChange = (event) => {
        this.setState({ language: event.target.value });
    };

    render() {
        return (
            <LanguageContext.Provider value={this.state}>
                <DisplayLanguage />
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                </select>
            </LanguageContext.Provider>
        );
    }
}