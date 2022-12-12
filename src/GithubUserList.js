import { useState } from "react"
import { Outlet } from "react-router"
import { Link } from "react-router-dom"

export function GithubUserList(){


    const [data, setData] = useState ({
        text: '',
        items: []
    })

    function handleFunction (event) {
        setData ((data) => {
            return {
                text: event.target.value,
                items: [...data.items]
            }
        })
    }

    const handleForm = (event) => {
        event.preventDefault ();
        setData ((data) => {
            return {
                text: '',
                items: [...data.items, data.text]
            }
        })
    }

    return (
        <div>
        <form onSubmit={handleForm}>
            <input type="text" onChange={handleFunction} />
            <button>Click me!</button>
            <ul>{data.items.map((item,index)=> <li key={index}><Link to={item}>User</Link></li> )}</ul>
        </form>

        <Outlet />
        </div>
    )
}