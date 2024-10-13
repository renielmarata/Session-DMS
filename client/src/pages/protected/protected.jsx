import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "../../context/authProvider";

const Protected = () => {
    const { isAuthenticated, isLoading } = UseAuthContext();

    if (isLoading) {
        return <div>loading</div>
    }

    return isAuthenticated ? <Outlet/> : <Navigate to="/" />;
}



export default Protected;