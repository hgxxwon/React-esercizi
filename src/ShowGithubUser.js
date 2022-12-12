import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGithubuser(){
    const {username = 'hgxxwon'} = useParams()
    return (
        <div>
            <h1><GitHubUser username={username}/></h1>
        </div>
    )
}