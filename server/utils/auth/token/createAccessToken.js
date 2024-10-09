const { jwt } = require("../../libs");

const createAccessToken = async (token) => {
    try {
        const { idnumber, username } = token;

        const newAccessToken = await jwt.sign(
            {
                idnumber, username
            },
            process.env.SECRET_KEY,
            {
                expiresIn: '30m',
            }
        );

        return newAccessToken;
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = createAccessToken;