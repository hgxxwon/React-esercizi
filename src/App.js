import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { Route, Routes } from "react-router-dom"


export function App(){
        return(
                <Container>
                    <Routes>
                        <Route path="/" element={<Welcome name="Jimmy"/>} />
                    </Routes>
                </Container>
            ) 
    }