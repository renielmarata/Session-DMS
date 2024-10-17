import axios from "axios";
import { createContext, useContext } from "react";
import { adminDashboardService } from "../services";

const UserContext = createContext();

export const UseUserContext = () => {
    return useContext(UserContext);
}




const UserDataProvider = ({children}) => {
    
    // admin
    const adminDashboardData = async () => {
        try {
            const response = await adminDashboardService();

            return response;

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <UserContext.Provider value={{ adminDashboardData }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserDataProvider;