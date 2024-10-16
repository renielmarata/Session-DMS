import { addSessionAPI } from "../../api";
import { getAccessTokenCookie } from "../../utils";

const addSessionService = async (data) => {
    try {

        const headers = {
        'Content-Type':'multipart/form-data',
        }

        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = accessToken;
        }


        const response = await addSessionAPI(headers, data);
        return response;
        

    } catch (err) {
        console.log(err);
        return false;
    }
}


export default addSessionService;