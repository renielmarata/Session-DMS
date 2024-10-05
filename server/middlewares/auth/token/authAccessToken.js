const { verifyAccessToken } = require("../../../utils");

const authAccessToken = async (req, res, next) => {
    try {
        const accessToken = await verifyAccessToken(req);

        if (!accessToken) {
            next();
        }


    } catch (err) {
        console.log(err);
        return false;
    }
}


module.exports = authAccessToken;