import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response)=> response.json())

export function UseGithubUser(username){
   const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)

function fetchUser(){
    mutate()
}

return {data, error, onFetch: fetchUser}

}