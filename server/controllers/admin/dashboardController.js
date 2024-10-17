const { GridFSBucket } = require("mongodb");
const { mongoose } = require("../../utils/libs");

const dashboardController = async (req, res) => {
    try {
        // GridFSBucket
        const conn = mongoose.connection;
        const bucket = new GridFSBucket(conn.db, { bucketName: 'files' });

        // Fetch the 3 latest files
        const latestFiles = await conn.collection('sessionFile.files')
            .find({})
            .sort({ _id: -1 })
            .limit(3)
            .toArray();

        // Count the total number of users
        const userCount = await conn.collection("users").countDocuments();

        // Send the response
        return res.status(200).json({
            files: latestFiles,
            users: userCount,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server Error" });
    }
};

module.exports = dashboardController;
