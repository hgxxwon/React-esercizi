import { useEffect, useRef } from "react"
import { useState } from "react"

export function Login(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: ''
    })

    const ref = useRef('');

    useEffect(()=>{
        ref.current.focus()
    },[])

    function handleInputChange(event){
        const {name, value, type, checked} = event.target

        setData((data) => {
            return {
               ...data,
               [name]: type === 'checkbox' ? checked : value 
            }})
    }

    return (
        <div>
            <h2>A Simple Form</h2>
            <input ref={ref} name="username" value={data.username} onChange={handleInputChange}/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange}/>
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/>
            <button type="submit">LOGIN</button>
        </div>
    )
}