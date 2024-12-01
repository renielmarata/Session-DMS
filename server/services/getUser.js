const { userModel } = require("../models");


const getUser = async (id) => {
    try {

        const data = await userModel.findOne({_id: id});

        if (!data) {
            return false;
        }

        return data;

    } catch (err) {
        console.log(err);
        throw new Error("getUser error: "+err.message);
    }
}

module.exports = getUser;