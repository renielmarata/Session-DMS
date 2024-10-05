import axios from "axios";
import { checkAuthAPI } from "../../api";
import { axiosInstance, endPoints } from "../../config";
import { getAccessTokenCookie } from "../../utils";


const checkAuth = async () => {
    try {
        const headers = {
        'Content-Type':'application/json',
        };

        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = `Bearer ${accessToken}`;
        }

        const response = await axiosInstance.post(
            endPoints.auth.checkAuth,
            {},
            {
                headers,
            }
        )

        return response;

    } catch (err) {
        console.error(err);
        return false;
    }
}

export default checkAuth;