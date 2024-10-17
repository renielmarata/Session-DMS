import { adminDashboardAPI } from "../../api";
import { getAccessTokenCookie } from "../../utils";

const adminDashboardService = async () => {
    try {
        const headers = {
            'Content-Type':'multipart/form-data',
        }

        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = `Bearer ${accessToken}`;
        }

        const response = await adminDashboardAPI(headers);

        return response;

    } catch (err) {
        console.log(err);
        return false;
    }
}


export default adminDashboardService;