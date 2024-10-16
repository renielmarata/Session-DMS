import { createContext, useContext } from "react";

const UserContext = createContext();

export const UseUserContext = () => {
    return useContext(UserContext);
}



const UserAuthProvider = ({children}) => {
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;