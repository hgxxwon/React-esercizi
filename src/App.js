import { Link, Route, Routes } from "react-router-dom"
import { Container } from "./Container";
import { Welcome } from "./Welcome";
import { Counter } from "./Counter"
import { ShowGithubuser } from "./ShowGithubUser"



export function App(){
        return(
                <Container>
                    <div>
                        <Link to="/">Home</Link> | <Link to="counter">Counter</Link> | <Link to="users/:username">Username</Link>
                    </div>
                    <Routes>
                        <Route path="/" element={<Welcome name="Jimmy"/>} />
                        <Route path="counter" element={<Counter/>} />
                        <Route path="users/:username" element={<ShowGithubuser/>}/>
                    </Routes>
                </Container>
            ) 
    }