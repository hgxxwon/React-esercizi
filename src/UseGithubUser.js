import { useState } from "react"

export function UseGithubUser(){
    const [data, setData] = useState(null)
const [error, setError] = useState(null)

async function fetchUser(username){
    setError(null)
    try{
        const response = await fetch(`https://api.github.com/users/${username}`)
        const json = await response.json()

        if(response.status !== 200){
            setError(new Error("there has been an error"))
        }

        setData(json)
    }catch(error){
        setError(error)
        setData(null)
    }
}

return {data, error, onFetch: fetchUser}

}