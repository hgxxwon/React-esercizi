import { UseGithubUser } from "./UseGithubUser"

export function GitHubUser({username}){
    const {data, error, onFetch} = UseGithubUser(username)

    function handleFetchUser(){
        onFetch(username)
    }

    return <div>
        <button onClick={handleFetchUser}>Show the User</button>
        {data && <h2>{data.name}</h2>}
        {error && <h2>there's an error</h2>}
    </div>
}