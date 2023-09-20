import {StrictMode} from "react";
import { createRoot } from "react-dom/client";
import "app/style.scss";
import { BrowserRouter } from "react-router-dom";
import App from "app/App";

const rootContainer = document.querySelector("#root") as Element;
const root = createRoot(rootContainer);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
