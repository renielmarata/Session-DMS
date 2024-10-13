import { axiosInstance, endPoints } from "../../config";

const logoutService = async () => {
    try {
        const response = await axiosInstance.post(
            endPoints.auth.logout,
            {},
            {
                withCredentials: true,
            }
        );


        return response;
    } catch (err) {
        console.log(err);
        return false;
    }
}


export default logoutService;