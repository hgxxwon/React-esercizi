import { Counter } from "./Counter";

export function App(){
        return(
                <div>
                    <Counter incrementedBy={10} count={0} />
                </div>
            ) 
    }