import { createContext, useContext, useEffect, useState } from "react";
import { checkAuth } from "../services";

const AuthContext = createContext();

export const UseAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showNotif, setShowNotif] = useState(false);

    useEffect(()=>{
        const initialLoad = async () => {
            try {

                await checkAuth(setIsAuthenticated, setShowNotif);


            } catch (err) {
                console.error(err);
                setIsAuthenticated(false);
                setShowNotif(false);
            }
        }

        initialLoad();
    },[])


    return (
        <AuthContext.Provider value={{isAuthenticated, showNotif}}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;