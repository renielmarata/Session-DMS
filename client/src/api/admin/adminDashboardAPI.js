import { axiosInstance, endPoints } from "../../config";

const adminDashboardAPI = async (headers) => {
    try {
        const response = await axiosInstance.get(
            endPoints.admin.dashboard,
            {
            headers,
            withCredentials: true,
                responseType: 'blob',
            }
        );

        return response.data;
        
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default adminDashboardAPI;
