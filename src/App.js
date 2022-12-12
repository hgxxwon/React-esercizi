import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { Container } from "./Container";
import { ShowGithubuser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";
import { GitHubUser } from "./GitHubUser";

export function App(){
        return(
            <Container>
            <div>
                <Link to="/">Home</Link> | <Link to="counter">Counter</Link> | <Link to="/:username">Username</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Jimmy"/>} />
                <Route path="counter" element={<Counter/>} />
                <Route path="/:username" element={<ShowGithubuser />}/>
                <Route path="users" element={<GithubUserList/>}>
                    <Route index element={<p>Hello, user! insert a username</p>}/>
                    <Route path=":username" element={<GitHubUser />} />
                </Route>
            </Routes>
        </Container>
            ) 
    }