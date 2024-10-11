const { createAccessToken } = require("../../utils");
const { jwt } = require("../../utils/libs");

const checkAuthController = async (req, res) => {
    try {
        
        const accessToken = req.accessToken;
        const refreshToken = req.refreshToken;

        console.log('accessToken -> ' + JSON.stringify(accessToken));
        console.log('refreshToken -> ' + JSON.stringify(refreshToken));
        console.log("received in controller");


        if (accessToken) {
            return res.status(200).json({
                message: 'authenticated',
            });
        }

        if (refreshToken) {

            // create accessToken
            const newAccessToken = await createAccessToken(refreshToken);

            // send accessToken in cookie
            if (newAccessToken) {
                res.cookie("TolGovAccess", newAccessToken, { maxAge: 30 * 60 * 1000 });

                 return res.status(200).json({
                    message: "authenticated",
                });
            }

            return res.status(401).json({
                message: 'unauthenticated'
            })
        }

        return res.status(401).json({
            message: 'unauthorized',
        })

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error',
        })
    }
}


module.exports = checkAuthController;                              