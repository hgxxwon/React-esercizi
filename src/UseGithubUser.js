import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response)=> response.json())

export function UseGithubUser(username){
   const {data, error, mutate} = useSWR(username =! null ? `https://api.github.com/users/${username}`: new Error(('No user')), fetcher)

function refreshUser(){
    mutate()
}

return {data, error, onRefresh: refreshUser}

}