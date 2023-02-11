import React from "react";
import { useParams } from "react-router-dom";

export function ShowGithubUser() {
    const { name } = useParams();

    return (
        <div>
            <h2>Hello GithubUser {name}</h2>
        </div>
    )


}