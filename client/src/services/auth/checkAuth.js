import { axiosInstance, endPoints } from "../../config";

const checkAuth = async () => {
    try {
        const response = await axiosInstance(
        )
    } catch (err) {
        console.error(err);
        return false;
    }
}

export default checkAuth;