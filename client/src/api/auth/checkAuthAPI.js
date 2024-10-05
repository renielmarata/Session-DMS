import { axiosInstance, endPoints } from "../../config";

const checkAuthAPI = async (headers) => {
    try {
        const response = await axiosInstance.post(
            endPoints.auth.checkAuth,
            {},
            {
                headers,
            }
        )

        return response;
    } catch (err) {
        console.log(err);
        return false;
    }
}


export default checkAuthAPI;