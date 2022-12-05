import React from "react";
import { Container } from "./Container";
import { GitHubUser } from "./GitHubUser";
import { Welcome } from "./Welcome";

export function App(){
        return(
            <div>
                <Container title="Benvenuto">
                    <Welcome />
                    <GitHubUser username="hgxxwon" />
                </Container>
            </div>
            ) 
    }