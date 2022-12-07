import { Outlet } from "react-router-dom";

export function ShowGithubuser(){
    return (
        <div>
            <p>your user:</p>


            <Outlet/>
        </div>
    )
}