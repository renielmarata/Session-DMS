const { GridFSBucket, ObjectId } = require("mongodb");
const { mongoose } = require("../../utils/libs");

const dashboardController = async (req, res) => {
    try {
        console.log("Received in dashboard controller");


        const conn = mongoose.connection;
        const bucket = new GridFSBucket(conn.db, { bucketName: 'sessionFile' });


        const fileId = await conn.db.collection('sessionFile.files').find({}, { projection: { _id: 1, filename: 1 }}).limit(3).sort({ uploadDate: -1 }).toArray();

        console.log(fileId[0].filename);
        

    } catch (err) {
        console.error("An error occurred:", err);
        return res.status(500).json({ message: "Server Error" });
    }
};

module.exports = dashboardController;
