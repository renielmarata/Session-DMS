import { createContext, useContext, useEffect, useState } from "react";
import { checkAuth } from "../services";

const AuthContext = createContext();

export const UseAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(()=>{
        const initialLoad = async () => {
            try {
                await checkAuth(isAuthenticated, setIsAuthenticated);

                

            } catch (err) {
                console.error(err);
                setIsAuthenticated(false);
            }
        }

        initialLoad();
    },[isAuthenticated])


    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;