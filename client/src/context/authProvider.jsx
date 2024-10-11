import { createContext, useContext, useEffect, useState } from "react";
import { checkAuth } from "../services";
import signinAuth from "../services/auth/signinAuth";

const AuthContext = createContext();

export const UseAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    

    // initial authentication
    useEffect(() => {
        const initialLoad = async () => {
            try {

                const res = await checkAuth(setIsAuthenticated, setShowNotif);
                console.log("response in -> " + res);

                if (res) {
                    await setIsAuthenticated(true);
                }

                console.log(isAuthenticated);


            } catch (err) {
                console.error(err);
                setIsAuthenticated(false);
                setShowNotif(false);
            }
        }

        initialLoad();
    }, [isAuthenticated]);



    return (
        <AuthContext.Provider value={{isAuthenticated, showNotif, setShowNotif, signinAuth }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;