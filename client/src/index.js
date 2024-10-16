import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import AuthProvider from "./context/authProvider.jsx";
import UserDataProvider from "./context/userDataProvider.jsx";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <UserDataProvider>
                    <App/>
                </UserDataProvider>
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>
)