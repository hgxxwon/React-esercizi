import React from "react";
import { Container } from "./Container";
import { Add } from "./Jsx_3";
import { Welcome } from "./Welcome";

export function App(){
        return(
            <div>
                <Container title="Benvenuto">
                    <Welcome />
                    <Add n1={2} n2={8} />
                </Container>
            </div>
            ) 
    }