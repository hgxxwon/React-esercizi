import { useState } from "react"

export function Login(){
    const [data, setData] = useState({
        username: '',
        password: '',
        remember: ''
    })

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
            <input name="username" value={data.username} onChange={handleInputChange}/>
            <input name="password" type="password" value={data.password} onChange={handleInputChange}/>
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange}/>
            <button 
            style={{backgroundColor: data.password.length < 8 ? 'red' : 'green', padding: '10px'}}
            type="submit">LOGIN</button>
        </div>
    )
}