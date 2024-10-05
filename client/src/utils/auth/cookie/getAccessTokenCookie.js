import Cookie from 'js-cookie';


const getAccessTokenCookie = async () => {
    try {
        const accessToken = await Cookie.get('TolGovAccess');

        if (!accessToken) {
            return false;
        }

        return accessToken;

    } catch (err) {
        console.log(err);
        return false;
    }
}


export default getAccessTokenCookie;