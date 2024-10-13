import signinAuthAPI from "../../api/auth/signinAuthAPI";
import { axiosInstance, endPoints } from "../../config";
import { getAccessTokenCookie } from "../../utils";

const signinAuthService = async (data) => {
    try {

        const headers = {
            'Content-Type':'application/json',
        }

        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = `Bearer ${accessToken}`;
        }
        
        const response = await signinAuthAPI(headers, data);
        
        return response;



    } catch (err) {
        console.error(err);
        return false;
    }
}

export default signinAuthService;