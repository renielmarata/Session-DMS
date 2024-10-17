import { axiosInstance, endPoints } from "../../config";

const adminDashboardAPI = async (headers) => {
    try {

        const response = await axiosInstance.post(
            endPoints.admin.dashboard,
            {},
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



export default adminDashboardAPI;