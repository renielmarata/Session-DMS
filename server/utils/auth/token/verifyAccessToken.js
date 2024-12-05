const { jwt, dotenv } = require("../../libs");


const getAccessTokenCookie = async (req) => {
    try {
        const unverifiedToken = req.headers?.authorization?.split(" ")[1];
    
        if (!unverifiedToken) {
            return null;
        }


        try {
            const accessToken = await jwt.verify(unverifiedToken, process.env.SECRET_KEY);

            console.log(accessToken);
            return accessToken;
        } catch (err) {
            console.log(err.name);
            return null;
        }



    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = getAccessTokenCookie;