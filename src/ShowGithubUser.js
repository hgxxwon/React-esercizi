import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function ShowGithubuser(){
    const {username = 'hgxxwon'} = useParams()
    return (
        <div>
            <p>your user: {username}</p>
            <h1><GitHubUser/></h1>
        </div>
    )
}