import { createRoot } from "react-dom/client";
import './index.css';
import { Router } from "./Root";


const id = document.getElementById('root');
const root = createRoot(id);

root.render(<Router/>);