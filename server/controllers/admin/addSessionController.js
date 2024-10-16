const { mongoose, Busboy } = require("../../utils/libs");
const { GridFSBucket } = require("mongodb");




const addSessionController = async (req, res) => {
    try {

        if (!req.accessToken && !req.refreshToken) {
            console.log('accessToken and refreshToken not found');
            return res.status(401).json({
                message: 'unauthenticated',
            });
        }

        // GridFSBucket
        const conn = mongoose.connection;
        const bucket = new GridFSBucket(conn.db, { bucketName: 'sessionFile' });

        let totalFile = 0;
        let fileProcessed = 0;
        let fileFailed = false;

        console.log("received add session request");

        const busboy = Busboy({ headers: req.headers });

        busboy.on('file', async (fieldname, file, filename, encoding, mimetype) => {

            totalFile += 1;

            const uploadStream = await bucket.openUploadStream(filename, { contentType: mimetype });

            await file.pipe(uploadStream);

            await uploadStream.on('finish', () => {
                console.log(`inserted --> ${JSON.stringify(filename.filename)}`);
                fileProcessed += 1;

                if (fileProcessed === totalFile) {
                    return res.status(200).json({
                        message: `All files ${totalFile} successfully uploaded`,
                    })
                }
            });

            await uploadStream.on('error', () => {
                console.log(`failed ${filename}`);
                fileFailed = true;
                re.status(500).json({ message: `Error inserting file: ${filename}` });
            })

        });

        busboy.on('finish', () => {
            console.log("finish receiving all files");

        
        });

        busboy.on('error', () => {
            console.log("file error");
        });

        req.pipe(busboy);




    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = addSessionController;