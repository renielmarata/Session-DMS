const { userModel } = require("../../models");
const { getUser } = require("../../services");
const { createAccessToken, createRefreshToken } = require("../../utils");
const { jwt } = require("../../utils/libs");

const signinAuthController = async (req, res) => {
    try {



        // check user using username and password
        const user = await userModel.findOne(req.body);


        // if found, create accessToken and refreshToken and return 200
        if (user) {
            const { _id, username } = user;

            const newAccessToken = await createAccessToken({"id":_id, "username":username});
            

            if (!newAccessToken) {
                return res.status(500).json({ message: 'accessToken creation error' });
            }

            const newRefreshToken = await createRefreshToken({ "id":_id, "username":username });


            if (!newRefreshToken) {
                return res.status(500).json({ message: 'refreshToken creation error' });
            }



            res.cookie('TolGovAccess', newAccessToken, { maxAge: 30 * 60 * 1000 });
            res.cookie('TolGovRefresh', newRefreshToken, { maxAge: 1 * 60 * 60 * 1000, httpOnly: true });

            const userData = await getUser(_id);



            return res.status(200).json({
                message: "authenticated",
                role: user.role,
                userData: userData,
            });
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