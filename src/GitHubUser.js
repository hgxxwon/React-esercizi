import { useParams } from "react-router-dom"
import { UseGithubUser } from "./UseGithubUser"

export function GitHubUser(){
    const {username} = useParams()
    const {data, error, onFetch} = UseGithubUser(username)

    function handleFetchUser(){
        onFetch()
    }

    return <div>
        <button onClick={handleFetchUser}>Show the User</button>
        {data && <h2>{data.name}</h2>}
        {error && <h2>there's an error</h2>}
    </div>
}