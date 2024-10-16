const { express, mongoose, dotenv, cookieParser, helmet, cors } = require("./utils/libs.js");
const { dbConnect } = require("./config/index.js");
const { authAccessToken, authRefreshToken } = require("./middlewares/index.js");
const { checkAuthRouter, signinAuthRouter, logoutAuthRouter } = require("./routers/index.js");
const { GridFSBucket } = require("mongodb");
const Busboy = require('busboy');



const startServer = async () => {
    try {

        // database
        await dbConnect();

        // GridFSBucket
        const conn = mongoose.connection;
        const bucket = new GridFSBucket(conn.db, { bucketName: 'sessionFiles'});


        const app = express();


        // middlewares
        app.use(express.json());
        app.use(cookieParser());
        app.use(helmet());
        app.use(cors({
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST'],
            credentials: true,
        }));


        app.use(checkAuthRouter);
        app.use(signinAuthRouter);
        app.use(logoutAuthRouter);

        app.post("/addsession", authAccessToken, authRefreshToken, (req, res) => {

            if (!req.accessToken && !req.refreshToken) {
                return res.status(401).json({message: 'unauthenticated'});
            }

            const busboy = Busboy({headers: req.headers});

            busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {

                const uploadStream = bucket.openUploadStream(filename, { contentType:mimetype });

                file.pipe(uploadStream);
            })

            busboy.on('finish', (fieldname, file, filename, encoding, mimetype) => {
                console.log("finish processing file ");
                console.log(filename);
            })

            busboy.on('error', () => {
                console.log("file handling error");
            })

            req.pipe(busboy);
        });


        app.post('/adminDashboardData', (req, res) => {
            console.log("admin data --------------------");
        })



        

        app.listen(process.env.serverPort);


    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


startServer();