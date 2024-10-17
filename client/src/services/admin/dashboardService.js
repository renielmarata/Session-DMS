import { dashboardAPI } from "../../api";
import { getAccessTokenCookie } from "../../utils";

const dashboardService = async () => {
    try {
        const headers = {
            'Content-Type':'multipart/form-data',
        }

        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = `Bearer ${accessToken}`;
        }

        const response = await dashboardAPI(headers);

        return response;

    } catch (err) {
        console.log(err);
        return false;
    }
}


export default dashboardService;