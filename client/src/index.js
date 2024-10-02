import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./context/authProvider.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
        <StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </StrictMode>
    </AuthProvider>
)