const { jwt } = require("../../libs.js");

const createRefreshToken = async (data) => {
    try {
        const newRefreshToken = await jwt.sign(
            data,
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
        );


        return newRefreshToken;

    } catch (err) {
        console.log(err.name);
        return false;
    }
}

module.exports = createRefreshToken;