import { createContext, useContext, useEffect, useState } from "react";
import { checkAuth } from "../services";

const AuthContext = createContext();

export const UseAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(()=>{
        const initialLoad = async () => {
            try {
                await checkAuth();
            } catch (err) {
                console.error(err);
                return false;
            }
        }

        initialLoad();
    },[])


    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;