import { axiosInstance, endPoints } from "../../config";
import { getAccessTokenCookie } from "../../utils";

const signinAuth = async (data, setShowNotif) => {
    try {
        const headers = {
            'Content-Type':'application/json',
        }

        const accessToken = await getAccessTokenCookie();

        if (accessToken) {
            headers['authorization'] = `Bearer ${accessToken}`;
        }
        
        const response = await axiosInstance.post(
            endPoints.auth.signin,
            data,
            {
                headers,
                withCredentials: true
            }
        );
        
        if (response.status === 200 && response.data.message === 'authenticated') {
            setShowNotif(false);
            console.log('set to false');
            return response;
        }



    } catch (err) {
        setShowNotif(true);
        console.error(err);
        return false;
    }
}

export default signinAuth;