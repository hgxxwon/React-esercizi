import { Container } from "./Container";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export function App(){
        return(
            <div>
                <Container>
                    <Welcome />
                    <Login />
                </Container>
            </div>
            ) 
    }