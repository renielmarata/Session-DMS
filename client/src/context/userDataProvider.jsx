import axios from "axios";
import { createContext, useContext } from "react";
import dashboardService from "../services/admin/dashboardService";

const UserContext = createContext();

export const UseUserContext = () => {
    return useContext(UserContext);
}




const UserDataProvider = ({children}) => {
    
    // admin
    const adminDashboardDataService = async () => {
        try {
            const response = await dashboardService();

            console.log(response);

        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <UserContext.Provider value={{ adminDashboardDataService }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserDataProvider;