import { createRoot } from "react-dom/client";
import { App } from "./App";


const id = document.getElementById('root');
const root = createRoot(id);

root.render(<App />);