import { checkAuthAPI } from "../../api";
import { getAccessTokenCookie } from "../../utils";


const checkAuth = async (setIsAuthenticated) => {
    try {

        const headers = {
            'Content-Type': 'application/json',
        };


        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = `Bearer ${accessToken}`;
        }

        const response = await checkAuthAPI(headers);

        if (response.status === 200 && response.data.message === "authenticated") {
            setIsAuthenticated(true);
            return true;
        } else {
            setIsAuthenticated(false);
            return false;
        }


    } catch (err) {
        console.error(err);
        setIsAuthenticated(false);
        return false;
    }
}

export default checkAuth;