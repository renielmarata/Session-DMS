const { userModel } = require("../../models");
const { createAccessToken, createRefreshToken } = require("../../utils");

const signinAuthController = async (req, res) => {
    try {

        const accessToken = req.accessToken;
        const refreshToken = req.refreshToken;

        console.log("accessToken -> " + JSON.stringify(accessToken));
        console.log("refreshToken -> " + JSON.stringify(refreshToken));

        console.log('signin authentication controller');


        if (accessToken) {
            return res.status(200).json({
                message: 'authenticated',
            })
        }


        if (refreshToken) {
            const newAccessToken = await createAccessToken(refreshToken);

            res.cookie(
                "TolGovAccess",
                newAccessToken,
                {
                    maxAge: 30 * 60 * 1000,
                }
            );

            return res.status(200).json({
                message: 'authenticated',
            });
        }


        // check user using username and password
        const user = await userModel.findOne(req.body);


        // if found, create accessToken and refreshToken and return 200
        if (user) {
            const { _id, username } = user;

            const newAccessToken = await createAccessToken({ _id, username });

            if (!newAccessToken) {
                return res.status(500).json({ message: 'accessToken creation error' });
            }

            const newRefreshToken = await createRefreshToken({ _id, username });

            if (!newRefreshToken) {
                return res.status(500).json({ message: 'refreshToken creation error' });
            }



            res.cookie('TolGovAccess', newAccessToken, { maxAge: 30 * 60 * 1000 });
            res.cookie('TolGovRefresh', newRefreshToken, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true });

            return res.status(200).json({ message: "authenticated" });
        }


        return res.status(401).json({ message: "user not found" });




    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

module.exports = signinAuthController;