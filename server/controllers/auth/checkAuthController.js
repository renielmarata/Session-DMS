const { createAccessToken } = require("../../utils");
const { jwt } = require("../../utils/libs");

const checkAuthController = async (req, res) => {
    try {
        console.log("received in controller");
        const accessToken = req.accessToken;
        const refreshToken = req.refreshToken;

        if (accessToken) {
            return res.status(200).json({
                message: 'authenticated',
            });
        }

        if (!refreshToken) {
            console.log("accessToken been created");

            // Create a new access token
            const newAccessToken = await jwt.sign(
                {
                    username: 'reniel',
                    password: 'password123',
                },
                process.env.SECRET_KEY,
                {
                    expiresIn: '1h',
                }
            );

            // Set the cookie with the new access token
            res.cookie('testing', newAccessToken, {
                maxAge: 1 * 24 * 60 * 60 * 1000,
                path: '/' // Ensures the cookie is accessible across the site
            });

            // Send a response back to the client
            return res.status(200).json({
                message: 'authorized',
            });
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