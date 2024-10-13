import { axiosInstance, endPoints } from "../../config";

const signinAuthAPI = async (headers, data) => {
    try {

        const response = await axiosInstance.post(
            endPoints.auth.signin,
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


export default signinAuthAPI;