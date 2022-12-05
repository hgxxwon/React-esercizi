import { ClickCounter } from "./ClickCounter";
import { Container } from "./Container";
import { Welcome } from "./Welcome";

export function App(){
        return(
            <div>
                <Container>
                    <Welcome />
                    <ClickCounter />
                </Container>
            </div>
            ) 
    }