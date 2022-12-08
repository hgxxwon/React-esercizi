import { useParams } from "react-router-dom"
import { UseGithubUser } from "./UseGithubUser"

export function GitHubUser(){
    const {username} = useParams()
    const {data, error, onRefresh} = UseGithubUser(username)

    return <div>
        <button onClick={onRefresh}>Refresh the User</button>
        {data && <h2>{data.name}</h2>}
        {error && <h2>there's an error</h2>}
    </div>
}