import { useMemo} from "react"

const list = [
    {id: 0, name: 'robin', age: 17},
    {id: 1, name: 'dennis', age: 19},
    {id: 2, name: 'harold', age:18}
]

export function FilteredList(){
  
    const filteredUsers = useMemo(()=> {
        list.filter((user) => {
            if(user.age > 18){
                <h2>sei maggiorenne, {user}</h2>
            } else {
                <h2>non sei maggiorenne, {user}</h2>
            }
            return <h2>{user}</h2>
        })
    }, []);


    return (
        <div>
            <h1>ciao {filteredUsers}</h1>
        </div>
    )
}