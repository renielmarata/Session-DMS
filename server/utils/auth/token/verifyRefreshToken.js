const { jwt } = require("../../libs");

const verifyRefreshToken = async (req) => {
    try {
        const unverifiedToken = req.cookies.refreshToken;

        if (!unverifiedToken) {
            return null;
        }

        try {
            const refreshToken = await jwt.verify(
                unverifiedToken,
                process.env.SECRET_KEY,
            );

            return refreshToken;

            
        } catch (err) {
            console.log(err.name);
            return null;
        }

    } catch (err) {
        console.log(err);
        return null;
    }
}

module.exports = verifyRefreshToken;