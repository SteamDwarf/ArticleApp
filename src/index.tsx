import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";

const rootContainer = document.querySelector("#root") as Element;
const root = createRoot(rootContainer);

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
