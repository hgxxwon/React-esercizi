import { useRef } from "react";

 export function CarDetails() {
    const initialData = {model: 'Model', year: '2011', color: 'Black'}
    const form = useRef ();

    const formHandler = (event) => {
        const name = event.target.name;
        form.current[name].value = event.target.value;
    }

    return (
                <form ref={form} onChange={formHandler}>
                    <input name="model" defaultValue={initialData.model} /> 
                    <input name="year" defaultValue={initialData.year} />
                    <input name="color" defaultValue={initialData.color} />
                </form>
        )
}
