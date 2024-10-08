const { verifyRefreshToken } = require("../../../utils");

const authRefreshToken = async (req, res, next) => {
    try {
        const accessToken = req.accessToken;

        if (accessToken) {
            return next();
        }

        const refreshToken = await verifyRefreshToken(req);

        if (!refreshToken) {
            return next();
        }

        req.refreshToken = refreshToken;
        return next();
        
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}


module.exports = authRefreshToken;