import { axiosInstance, endPoints } from "../../config";

const addSessionAPI = async (headers, data) => {
    try {
        const response = await axiosInstance.post(
            endPoints.admin.addSession,
            data,
            {
                headers,
                withCredentials: true,
            }
        );

        return response;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default addSessionAPI;