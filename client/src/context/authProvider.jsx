import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuthService, signinAuthService, logoutService, addSessionService } from "../services";

const AuthContext = createContext();

export const UseAuthContext = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [notifSuccess, setNotifSuccess] = useState(false);
    const [notifError, setNotifError] = useState(false);
    

    // initial authentication
    useEffect(() => {
        const initialLoad = async () => {
            try {

                await checkAuthService(setIsAuthenticated);


            } catch (err) {
                console.error(err);
                setIsAuthenticated(false);
                setNotifError(false);
            } finally {
                setIsLoading(false);
            }
        }

        initialLoad();
    }, [isAuthenticated]);



    // signin
    const signin = async (data) => {
        try {
            console.log("testing send");
            const response = await signinAuthService(data);

            if (response.status === 200) {
                setNotifError(false);
                setIsAuthenticated(true);
                return navigate(response.data.role === "admin" ? "/adminpage" : "councilorpage");

            } else {

                console.log("signin failed");
            setNotifError(true);
                setIsAuthenticated(false);
                
            }

        } catch (err) {
            console.log(err);
            return false;
        }
    }


    // logout
    const logout = async () => {
        try {
            const response = await logoutService();
            console.log(response);

            if (response.status === 204) {
                navigate(0);
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }


    
    // ADMIN --------

    // add session
    const addSession = async (data) => {
        try {
            const response = await addSessionService(data);
            navigate(0);
        } catch (err) {
            console.log(err);
            return false;
        }
    }




    return (
        <AuthContext.Provider value={{
            // states
            isAuthenticated, 
            notifError, 
            setNotifError, 
            isLoading, 
            
            // services
            signin, 
            logout,
            addSession,

            }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider;