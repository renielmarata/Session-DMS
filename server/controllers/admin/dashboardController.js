const { GridFSBucket, ObjectId } = require("mongodb");
const { mongoose } = require("../../utils/libs");

const dashboardController = async (req, res) => {
    try {
        console.log("Received in dashboard controller");

        const conn = mongoose.connection;
        const bucket = new GridFSBucket(conn.db, { bucketName: 'sessionFile' });

        // Create a readable stream to fetch the file from GridFS
        const fileStream = bucket.openDownloadStream(new ObjectId('6713897a2a60ac5c0557b66a'));

        // Set the appropriate headers for the response
        res.setHeader('Content-Type', 'image/jpeg'); // Assuming the file is a JPEG image
        res.setHeader('Content-Disposition', 'inline'); // Display in the browser

        // Pipe the file stream directly to the response
        fileStream.pipe(res);

        // Handle stream errors
        fileStream.on('error', (err) => {
            console.error("Error streaming file:", err);
            res.status(404).json({ message: "File not found" });
        });

    } catch (err) {
        console.error("An error occurred:", err);
        return res.status(500).json({ message: "Server Error" });
    }
};

module.exports = dashboardController;
