import { createRoot } from "react-dom/client";
import { App } from "./App";
import './index.css';


const id = document.getElementById('root');
const root = createRoot(id);

root.render(<App />);