const { dotenv, mongoose } = require("../../utils/libs.js");

const dbConnect = async () => {
    try {

        await mongoose.connect(process.env.dbURL);
        console.log("Database connection success !!!");

    } catch (err) {
        console.log(err);
        proccess.exit(1);
    }
}

module.exports = dbConnect;