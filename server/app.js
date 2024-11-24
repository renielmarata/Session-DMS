const { express, mongoose, dotenv, cookieParser, helmet, cors } = require("./utils/libs.js");
const { dbConnect } = require("./config/index.js");
const { checkAuthRouter, signinAuthRouter, logoutAuthRouter, addSessionRouter, dashboardRouter } = require("./routers/index.js");
const { GridFSBucket } = require("mongodb");
const Busboy = require('busboy');



const startServer = async () => {
    try {

        // database
        await dbConnect();


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

        // admin
        app.use(addSessionRouter);
        app.use(dashboardRouter);
        app.post("/addUser", (req, res) => {
            const bb = Busboy({ headers: req.headers });

            bb.on('file', (fieldname, file, filename, encoding, mimetype) => {
                

                file.on('data', (data) => {
                    console.log(filename);
                });
                file.on('end', () => {
                    console.log(`File [${fieldname}] finished`);
                });
            });


            bb.on('finish', () => {
                console.log("finish receiving file");
            })

            req.pipe(bb);
        })

        

        app.listen(process.env.serverPort);


    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


startServer();