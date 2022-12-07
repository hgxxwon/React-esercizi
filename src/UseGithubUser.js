import useSWR from "swr"

const fetcher = (url) => fetch(url).then((response)=> response.json())

export function UseGithubUser(username){
   const {data, error, mutate} = useSWR(`https://api.github.com/users/${username}`, fetcher)

function refreshUser(){
    mutate()
}

return {data, error, onRefresh: refreshUser}

}