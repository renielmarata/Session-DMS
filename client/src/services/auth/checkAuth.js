import { checkAuthAPI } from "../../api";
import { getAccessTokenCookie } from "../../utils";


const checkAuth = async (isAuthenticated, setIsAuthenticated) => {
    try {

        const headers = {
            'Content-Type': 'application/json',
        };

        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = `Bearer ${accessToken}`;
        }

        const response = await checkAuthAPI(headers);

        if (response.status === 200 && response.data.message === "authorized") {
            return setIsAuthenticated(true);
        } else {
            console.log(response.status+" "+response.data.message);
            return setIsAuthenticated(false);
        }


    } catch (err) {
        console.error(err);
        return false;
    }
}

export default checkAuth;